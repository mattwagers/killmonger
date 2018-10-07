#!/usr/bin/env python
#------------------------------------------------------------------
# csv2ibex.py
#------------------------------------------------------------------
# Author: Andrew Wood <andywood@vt.edu>
# Modified by: Andrew Watts <awatts@bcs.rochester.edu>
#
# HLP/Jaeger Lab
# University of Rochester
# 08/28/2010
#------------------------------------------------------------------
"""
 Converts a tab-delimited CSV file to a Javascript input file for
   Ibex (formerly webSPR) web-based self-paced reading
   software, available at http://code.google.com/p/webspr/
   under the New BSD License.
"""
#------------------------------------------------------------------

import csv
import sys
import re
import ConfigParser

# GLOBALS *************************************************************
#changed in script
Non_Criticals = ('practice', 'filler')
Criticals = set()
ListSet = set() #list of "list" index numbers
#not changeable by config or cmdline
END_PUNCTUATION = ['.', '!', '?']
IGNORED_VALUES = ["", "NA", "N/A", "-", None]
ITEM_FMT_STRINGS = { \
                    'FULL_ITEM' : '[["{itemName}",[{gpNum},{gpDepend}]], ds, {{s: "{rs}"}}, {qs}]', \
                    'GPNUM_ONLY': '[["{itemName}",{gpNum}], ds, {{s: "{rs}"}}, {qs}]', \
                    'NO_GROUP'  : '["{itemName}", ds, {{s: "{rs}"}}, {qs}]' \
                    }

#editable from config or cmdline (TODO)
ITEMS_HEADER = '\n\t["sr", "__SendResults__", { }],\n\t'+\
        '["sep", "Separator", {}],\n\t' +\
        '["intro", "Message", {html: {include: "intro.html"}}],\n\t' +\
        '["info", "Form", {html: {include: "info.html"}}],'
ITEMS_FOOTER = '\t["contact", "Message", {consentRequired: false, html: {include: "contacts.html"}}],\n\t'+\
        '["code", "Form", {consentRequired: false, continueMessage:"This is the final page. You do not need to click to continue.", html: {include: "code.html"}}]'
ITEMS_PRACTICE = ['\n\t["startprac", "Message", {consentRequired: false, html: {include: "start_practice.html"}}],\n',
                  ',\n\t["endprac", "Message", {consentRequired: false, html: {include: "end_practice.html"}}],']

#this goes inbetween questions when there are 2 or more questions
QUEST_SEP = 'sep, {errorMessage: "Wrong. Please wait for the next question", normalMessage: "Please wait for the next question"}'

COL_STIMULUS = "Stimulus"
COL_STIM_ID = "StimulusID"
COL_LIST = "List"
COL_ORDER = "TrialOrder"
COL_TYPE = "StimulusType"
COL_CONDITION = "Condition"
COL_QUESTION = "Question"
COL_ANSWER = "Answer"
COL_ITEMID = "ItemID"


# UTILITY *************************************************************
qExitOpt = "PROMPT"

def qExit(msg, option = "PROMPT"):
    """
    Display a message and prompt the user if they would like to continue
    Can pass option to auto fail or auto continue
    """
    if option == "AUTOFAIL":
        print msg + "...STOPPING"
        sys.exit(1)
    elif option == "AUTOCONTINUE":
        print msg
        return

    c = raw_input(msg + "\nWould you like to continue anyway? (y/n): ")
    if c.upper() == 'Y' or c.upper() == "YES": return
    else: sys.exit(1)

# TODO: there is probably a saner way to do this.
def check_file(filename):
    """
    check if a file exists and is openable
    """
    try:
        f = open(filename).close()
    except IOError:
        print "\nERROR: Unable to open file '"+filename+"'\n"
        sys.exit(1)

def check_punctuation(sentence):
    """
    Check that a given string ends in an acceptable ending punctuation
     - @ tags are ignored in this evaluation, unless one is found at the end of the tag
     - return:
       * true if punctuation found in the right place,
       * false if no punctuation found at all,
       * suggested replacement if punctuation found at end of tag
    """
    words = sentence.split(" ")
    lastword = words[-1].split("@")[0]
    if lastword[-1] in END_PUNCTUATION:
        return True
    else:
        if(words[-1][-1] in END_PUNCTUATION):
            #    word-tag + last character + the tag minus the last character
            return lastword+words[-1][-1]+words[-1][len(lastword):-1]
        return False

# HEADER GENERATION ***************************************************

def parse_config_file(conf):
    """
    params:
      * conf:String - name of the input configuration file
    return:
      * dictionary with following entries:
        * inputfile:String - the name of the default input file (used if one isn't specified on command line)
        * outputfile:String - name of the default output file (used if one isn't specified on command line)
        * filler:String - how to treat fillers
        * order:String - the shuffleSeq that describes the order of the items
        * defaults:String - the item defaults: see the hlp wiki(FIXME: url here) for specifics
    """
    cfg = ConfigParser.SafeConfigParser()
    if cfg.read(conf) == []:
        print "Failed to read config file!"

    outDict = {}
    outDict['experiment_name'] = cfg.get('Vars', 'experiment_name')
    outDict['researcher'] = cfg.get('Vars', 'researcher')
    outDict['contact'] = cfg.get('Vars', 'contact')
    outDict['inputfile'] = cfg.get('Vars', 'inputfile')
    outDict['outputfile'] = cfg.get('Vars', 'outputfile')
    outDict['order'] = cfg.get('Vars', 'order')
    outDict['filler'] = cfg.get('Vars', 'filler')

    defaults_sections = ['Separator', 'RegionedSentence', 'Question']
    defaults_dct = {'Separator' : {}, 'RegionedSentence' : {}, 'Question' : {}}
    defaults_dct['Separator']['transfer'] = cfg.get('Separator', 'transfer')
    defaults_dct['Separator']['normalMessage'] = cfg.get('Separator', 'normalMessage')
    defaults_dct['Separator']['errorMessage'] = cfg.get('Separator', 'errorMessage')
    defaults_dct['RegionedSentence']['mode'] = cfg.get('RegionedSentence', 'mode')
    defaults_dct['Question']['as'] = cfg.get('Question', 'as')
    defaults_dct['Question']['randomOrder'] = cfg.get('Question', 'randomOrder')
    defaults_dct['Question']['hasCorrect'] = cfg.get('Question', 'hasCorrect')

    subsection = '\t"{0}", {{\n{1} }}'
    subsecs = []
    for section in defaults_sections:
        subsecs.append(subsection.format(section,
            ",\n".join(["\t\t{0}: {1}".format(k,v) for k,v in defaults_dct[section].iteritems()])
        ))

    defaults_string = "var defaults = [\n{0}\n];".format(',\n'.join(subsecs))

    outDict['defaults'] = defaults_string
    return outDict

def format_header(dct):
    """
    convert the header dictionary into a js string.
    It is strongly recommended to run generate_item_dict first
    """
    order = dct["order"]
    filler = dct["filler"]
    item_order = ""

    if(filler == "SEP_EACH"):
        item_order = {
            "ORDERED" : 'shuffle(randomize("filler"), anyOf({0}))',
            "SHUFFLE" : 'shuffle(randomize("filler"), shuffle({0}))',
            "RANDOM" : 'shuffle(randomize("filler"), seq(randomize({0})))',
            "RSHUFFLE" : 'shuffle(randomize("filler"), rshuffle({0}))'
        }[order]
    else:
        item_order = {
            "ORDERED" : 'anyOf("filler", {0})',
            "SHUFFLE" : 'shuffle("filler",{0})',
            "RANDOM" : 'randomize(anyOf("filler",{0}))',
            "RSHUFFLE" : 'rshuffle("filler",{0})'
        }[order]

    #if the item list has been generated, go ahead and fill in the critical names
    if len(Criticals):
        item_order = item_order.format(','.join(['"{0}"'.format(c) for c in Criticals]))

    try:
        outStr = 'var shuffleSequence = seq("intro", "info", "list_ordering", "startprac", "practice", "endprac", sepWith("sep", {0}), "contact", "sr", "code");\n\n'+\
            'var ds = "RegionedSentence";\n'+\
            'var qs = "Question";\n'+\
            'var sep = "Separator";\n\n'+\
            'var manualSendResults = true;\n\n' +\
            '{1}'
        return outStr.format(item_order, dct["defaults"])
    except KeyError:
        print "WARNING: invalid header dictionary...returning a NoneType"
        return None

def generate_header(conf):
    """
    params:
      * conf:String (name of input config file) or Dictionary of values for header
        proper action is taken based on type
    return:
      * String header (formatted)
    """
    if type(conf) == dict:
        return format_header(conf)
    elif type(conf) == str:
        return format_header(parse_config_file(conf))

# ITEM GENERATION *****************************************************

def generate_item_dict(infile):
    """
    params:
        * infile:String - name of the input tab-separated file
    return:
        * List of Dictionaries of items
    """

    check_file(infile)

    orderWarning = False
    orderCounters = {}
    items = []
    stimids = set()

    with open(infile, 'r') as csvin:
        inputdata = csv.DictReader(csvin, delimiter='\t')
        fields = inputdata.fieldnames

        if COL_STIM_ID not in fields:
            qExit("Warning: no Stimulus Identifiers provided.", qExitOpt)
        if COL_LIST not in fields:
            if not listWarning:
                print "Warning: No 'List' column present, using one list."
        if COL_STIMULUS not in fields:
            print "ERROR: No 'Stimulus' column...\n\t-required to build an experiment!"
            sys.exit(1)

        # Determine Question and Answer field names
        qf = re.compile(r'^' + COL_QUESTION)
        af = re.compile(r'^' + COL_ANSWER)
        questions = [field for field in fields if re.match(qf, field)]
        answers = [field for field in fields if re.match(af, field)]
        qfields = zip(sorted(questions),sorted(answers))
        if len(questions) != len(answers):
            print "ERROR: Unequal number of question and answer columns!"
            sys.exit(1)

        for i, line in enumerate(inputdata, start=1):
            itemDict = {}

            #STIMULUS ID
            if COL_STIM_ID in fields:
                itemDict['StimulusID'] = line[COL_STIM_ID]
                if itemDict['StimulusID'] in ("", None):
                    qExit("Warning: Blank Stimulus Identifier encountered", qExitOpt)

            #LIST
            try:
                itemDict['List'] = line[COL_LIST]
                ListSet.add(line[COL_LIST])
            except KeyError:
                itemDict['List'] = 1

            #STIMULUS
            stimulus = line[COL_STIMULUS].strip()
            if stimulus == "":
                qExit("Warning: Blank stimulus: {}".format(i), qExitOpt)
                continue
            chk = check_punctuation(stimulus)
            if not chk:
                print "Warning: no ending punctuation for stimulusID {0}".format(i)
            elif chk is not True:
                #then chk is a suggestion. Replace the last word with the fixed punctuation location
                replaceIndex = len(stimulus)-len(chk)
                replaced = stimulus[replaceIndex:]
                stimulus = stimulus[:replaceIndex]+chk
                print "Warning: misplaced punctuation at stimulusID {0}: replaced '{1}' with '{2}'".format(i, replaced, chk)
            itemDict['Stimulus'] = stimulus

            #ORDER
            try:
                itemDict['Order'] = int(line[COL_ORDER])
                if itemDict['Order'] in ("", None):
                    qExit("Warning: blank order at stimuli: {0}".format(i), qExitOpt)
            except KeyError:
                if not orderWarning:
                    print "Warning: order not specified, using default ordering (1,2,3,...)."
                    orderWarning = True
                try:
                    itemDict['Order'] = orderCounters[itemDict['List']]
                except KeyError:
                    #if it's the first item of a list
                    itemDict['Order'] = orderCounters[itemDict['List']] = 1

                orderCounters[itemDict['List']] += 1

            #TYPE
            try:
                itemDict['Type'] = line[COL_TYPE]
            except KeyError:
                itemDict['Type'] = "defaultStim"

            #CONDITION (overwrites type, unless it's '-'
            try:
                if(not line[COL_CONDITION].upper() in IGNORED_VALUES):
                    itemDict['Type'] = line[COL_CONDITION]
            except KeyError:
                if not conditionWarning:
                    print "Warning: conditions not specified, using 'defaultStim'"
            if(itemDict['Type'] not in ("practice","filler")):
                itemDict['Critical'] = True
                Criticals.add(itemDict['Type'])
            else:
                itemDict['Critical'] = False

            #ITEMID
            try:
                itemDict['ID'] = line[COL_ITEMID]

                # check to see if we've already seen this item
                # e.g. the same filler item on multiple lists
                tmp = (itemDict['ID'], itemDict['Stimulus'])
                if tmp in stimids:
                    print "Skipping duplicate item {0}".format(i)
                    continue # don't proceed onto adding it to the items
                else:
                    stimids.add(tmp)
            except KeyError:
                print "Warning: Missing Item ID at stimuli {0}".format(i)

            #QUESTIONs and ANSWERs
            final_questions = []
            if len(questions) == 0:
                print "No question/answer pair found for stimulus",i,", using only stimulus."
            else:
                for j, (q,a) in enumerate(qfields,1):
                    skip = False
                    question = line[q]
                    if question in IGNORED_VALUES:
                        print "Warning at stimulus {0}: Invalid or no value for Question {1}. Skipping item!".format(i,j)
                        skip = True
                    answer = line[a]
                    if (answer in IGNORED_VALUES) and (skip == False) :
                        print "Warning at stimulus {0}: No Answer for Question {1}. Skipping item!".format(i,j)
                        skip = True
                    if not skip:
                        final_questions.append({'Question': question, 'Answer': answer})
            itemDict['Questions'] = final_questions

            items.append(itemDict)
    return items

def format_questions(qlst):
    """
    Takes a list of dicts {Question: val, Answer: val} and formats them
    for being added to an item
    """
    qs = []
    multiq = False
    if len(qlst) > 1:
        multiq = True

    for i, q in enumerate(qlst, 1):
        question = q['Question']
        #determine type of question (yes/no vs multiple choice)
        answer = q['Answer'].upper()
        if(answer in ('Y','N')):
            if(answer == 'Y'):
                answer = 'hasCorrect: "Yes", randomOrder: false'
            else:
                answer = 'hasCorrect: "No", randomOrder: false'
        else:
            tmp = ','.join(['"{0}"'.format(a) for a in answer.split(',')])
            answer = "as : [{0}], randomOrder: true".format(tmp)

        #build the string of questions
        qs.append('qs, {{q: "{0}", {1}}}'.format(question, answer))
        if multiq:
            if i < len(qlst):
                qs.append(QUEST_SEP)
            else:
                qs.append('sep, {}')

    if qs == []:
        return None
    else:
        return ',\n\t\t'.join(qs)

def split_context_stimuli(stimulus):
    """
    Takes a multi-sentence stimulus item and splits it into an array of sentences
    formatted such that any starting with "S\d+:" has that element joined with
    the first word.
    """
    # Each sentence should be N > 0 non-final-punctuation chars (i.e. not [!?.]) followed by
    # final-punctuation [!?.] followed by a whitespace and a capital letter.
    # This should get around 80-90% of sentence boundaries, but misses some and
    # for some reason chokes on things like "Washington, D.C.", at the end of a
    # sentence which comes out as ["... Washington, D." "C."]
    sentre = r'([^\.\?\!]+[\.\?\!]+)(?=\s+[A-Z])'
    stimlist = [x.strip() for x in re.split(sentre, stimulus) if len(x) > 0]

    for i, item in enumerate(stimlist):
        tmp = re.split(r"(S\d+:) (.*)", item)
        if len(tmp) > 1:
            # elements 0 and 3 are going to be ''
            stimlist[i] = "{0}_{1}".format(tmp[1], tmp[2])

    return stimlist

def format_item(item, multi=False):
    """
    Takes a dict representing an item and formats it
    """
    questions = []
    try:
        questions = item['Questions']
    except KeyError:
        pass # it's already set to []

    stimulus = item['Stimulus']
    itmlst = item['List'] #TODO: add list information to critical items
    fmt_item = ' ds, {{s: "{0}", id: "{1}", list: "{2}"}}'
    if multi:
        if item['Type'] in Non_Criticals:
            itmlst = 'NA' # don't need list info for singleton items
        stimulus = split_context_stimuli(stimulus)
        if len(stimulus) == 1:
            # if it was a single sentence, return just the sentence
            stimulus = stimulus[0]
        else:
            # if it's a proper array of quoted sentences, don't quote the array
            fmt_item = ' ds, {{s: {0}, id: "{1}", list: "{2}"}}'

    fmt_item = fmt_item.format(stimulus, item['ID'], itmlst)
    fmt_quest = format_questions(questions)
    if fmt_quest:
        fmt_item = ',\n\t\t'.join((fmt_item, fmt_quest))
    order = ''
    if item['Type'] in Non_Criticals:
        order = '{0}'.format(str(item['Order']))
    else:
        order = '[{0},0]'.format(str(item['Order']))
    return '[["{0}",{1}],{2}]'.format(item['Type'], order, fmt_item)

def generate_item_str(infile, multi=False):
    """
    params:
        * indict:Dictionary - contains the dictionary of items to be wrapped in a string
    return:
        * String containing the 'items' structure
    """
    dct = generate_item_dict(infile)

    outputStr = ITEMS_HEADER

    # output N instances of this string, where N is the number of lists
    outputStr += "\n\t"+'\n\t'.join(['[["list_ordering", 0], "Separator", {transfer: 200, normalMessage: "The experiment will start momentarily"}],' for i in range(len(ListSet))])

    practice = sorted([item for item in dct if item['Type'] == 'practice'], key=lambda x: x['Order'])
    if practice != []:
        outputStr += ITEMS_PRACTICE[0] + '\t' + ',\n\t'.join([format_item(item, multi=multi) for item in practice]) +  ITEMS_PRACTICE[1]

    items = [format_item(item, multi=multi) for item in sorted(dct, key=lambda x: x['Order']) if item['Type'] != 'practice']

    outputStr += "\n\t"+',\n\t'.join(items)

    outputStr += ",\n"+ITEMS_FOOTER
    return '\nvar items = [{0}\n];'.format(outputStr)

# OUTPUT FILE CREATION **************************************************************

def create_outfile(outfile, header, items, footer=""):
    """
    simple wrapper to create an output file (can be used for more than just ibex files...)
    params:
        * outfile:String - name of the file to be created/overwritten
        * header:String - the file header
        * items:String - the items string
        * footer:String - file footer
    return: nothing (creates output file)
    """
    if len(Criticals) > 0:
        try:
            header = header % ','.join(['"{0}"'.format(item) for item in Criticals])
        except TypeError:
            pass

    with open(outfile, 'w') as fout:
        fout.write("{0}\n{1}\n{2}\n".format(header, items, footer).expandtabs(4))
    print "File '" + outfile + "' sucessfully created"


# FORMAT RESULTS FILE *********************************************************************

def format_results(infile):
    """
    Produce two tab-delimited files from the supplied results file
    """

    from urllib import unquote

    check_file(infile)

    sHead = ("DateReceived", "ParticipantID", "IP_MD5", "ControllerName", "ItemID",
             "ElementNumber", "StimulusType", "Group", "WordPosition", "Word",
             "RegionTag", "RT", "Newline", "Sentence", "ItemUniqueID", "List")
    qHead = ("DateReceived", "ParticipantID", "IP_MD5", "ControllerName", "ItemID",
             "ElementNumber", "StimulusType", "Group", "Question", "Answer",
             "AnswerCorrect", "AnswerTime")
    qeHead = ("DateReceived", "ParticipantID", "IP_MD5", "ControllerName", "ItemID",
             "ElementNumber", "StimulusType", "Group", "Question", "Answer",
             "AnswerCorrect", "AnswerTime")
    sOut = []
    qOut = []
    qeOut = []
    qSeq = 0
    qeSeq = 0
    sSeq = 0
    workerid = ''

    with open(infile, 'r') as fin:
        lastCtr = 1
        for line in fin:
            if (line[0] == '#'):
                continue
            else:
                s = line.rstrip("\n").rstrip("\r\n").split(",")
                if(s[2] == "DashedSentence"):
                    if(qSeq == sSeq):
                        sSeq += 1
                    elif(lastCtr > int(s[7])):
                        sSeq += 1
                        qSeq+=1

                    lastCtr = int(s[7])
                    sOut.append({
                        'DateReceived': s[0],
                        'ParticipantID': workerid,
                        'IP_MD5': s[1],
                        'ControllerName': "DashedSentence",
                        'ItemID': s[3],
                        'ElementNumber': s[4],
                        'StimulusType': s[5],
                        'Group': s[6],
                        'WordPosition': s[7],
                        'Word': unquote(s[8]),
                        'RT': s[9],
                        'Newline': s[10],
                        'Sentence': unquote(s[11])
                    })
                elif(s[2] == "Question"):
                    if(qSeq != sSeq):
                        qSeq += 1
                    qOut.append({
                        'DateReceived': s[0],
                        'ParticipantID': workerid,
                        'IP_MD5': s[1],
                        'ControllerName': "Question",
                        'ItemID': s[3],
                        'ElementNumber': s[4],
                        'StimulusType': s[5],
                        'Group': s[6],
                        'Question': unquote(s[7]),
                        'Answer': s[8],
                        'AnswerCorrect': s[9],
                        'AnswerTime': s[10]
                    })
                elif(s[2] == "QuestionExpanded"):
                    if(qeSeq != sSeq):
                        qeSeq += 1
                    qeOut.append({
                        'DateReceived': s[0],
                        'ParticipantID': workerid,
                        'IP_MD5': s[1],
                        'ControllerName': "QuestionExpanded",
                        'ItemID': s[3],
                        'ElementNumber': s[4],
                        'StimulusType': s[5],
                        'Group': s[6],
                        'Question': unquote(s[7]),
                        'Answer': s[8],
                        'AnswerCorrect': s[9],
                        'AnswerTime': s[10]
                    })
                elif(s[2] == "Form"):
                    if s[7] == 'workerid' or s[7] == 'name':
                        workerid = s[8]
                    else:
                        pass
                else:
                    print "Warning: Unrecognized Controller: {0}".format(s[2])

    with open('sentences.csv','w') as fout:
        sdr = csv.DictWriter(fout, fieldnames=sHead, delimiter='\t')
        sdr.writerow(dict(zip(sHead, sHead))) # write a header row
        for row in sOut:
            sdr.writerow(row)
        print "File 'sentences.csv' successfully written"
    with open('questions.csv','w') as fout:
        qdr = csv.DictWriter(fout, fieldnames=qHead, delimiter='\t')
        qdr.writerow(dict(zip(qHead,qHead))) # write a header row
        for row in qOut:
            qdr.writerow(row)
        print "File 'questions.csv' successfully written"
    with open('questionsexpanded.csv','w') as fout:
        qedr = csv.DictWriter(fout, fieldnames=qeHead, delimiter='\t')
        qedr.writerow(dict(zip(qeHead,qeHead))) # write a header row
        for row in qeOut:
            qedr.writerow(row)
        print "File 'questionsexpanded.csv' successfully written"


def set_force_continue(option, opt_str, value, parser):
    """
    A callback for optparse
    """
    global qExitOpt
    qExitOpt = "AUTOCONTINUE"


def set_strict(option, opt_str, value, parser):
    """
    A callback for optparse
    """
    global qExitOpt
    qExitOpt = "AUTOFAIL"

# USER INTERFACE *********************************************************************

if __name__ == "__main__":
    import sys
    from optparse import OptionParser

    usageStr = "\t%prog [PARAMETERS] INPUT_FILE OUTPUT_FILE\n" +\
          "or:\t %prog -c CONFIG_FILE [MORE PARAMETERS] [INPUT_FILE OUTPUT_FILE]\n" +\
          "or:\t %prog -O [RESULTS_FILE (default 'results')]\n" +\
          "or:\t %prog --help"
    parser = OptionParser(usage=usageStr,
                          description="IBEX Input File Converter: " +\
                                      "Converts a tab-delimited CSV file to a JavaScript input file " +\
                                      "for Ibex.\n",
                          epilog="Author: Andrew Wood <andywood@vt.edu> and Andrew Watts <andrew.watts@rochester.edu>",
                          version="%prog 0.9.5")

    parser.add_option("-c", "--config", dest="configfile", default="default.cfg",
                  help="Use a custom config file")
    parser.add_option("-d", "--defaults", action="store_true", dest="defaults",
                  default=True, help="Use default in-out files")
    parser.add_option("-f", "--fillernormal", action="store_true", default=False,
                      dest="fillerin", help = "Treat Fillers as a normal item")
    parser.add_option("-F", "--force", action="callback", callback=set_force_continue,
                      help="Ignore warnings and continue")
    parser.add_option("-n", "--nothing", action="store_true", dest="doNothing", default=False,
                      help="Stop after parsing arguments")
    parser.add_option("-O", "--outputformat", action="store_true", dest="outputFmtMode", default=False,
                      help="Run in 'Format Output' mode: make the Ibex results file more readable")
    parser.add_option("-p", "--prompt", action="store_true", dest="prompt", default=False,
                      help="Prompt the user for any missing information")
    parser.add_option("-r", "--randomize", action="store_true", dest="randomize", default=False,
                      help="Randomize items of each type (don't use if you hard coded an ordering)")
    parser.add_option("-s", "--shuffle", action="store_true", dest="shuffle", default=False,
                      help="Shuffle (evenly space) the different types of items")
    parser.add_option("-S", "--strict", action="callback", callback=set_strict,
                      help="Strict: will automatically stop if an error is encountered")
    parser.add_option("-m", "--multi", action="store_true", dest="multi", default=False,
                      help="Split multiple sentences into an array to be presented on seperate lines")

    (options, args) = parser.parse_args()

    infile = None
    outfile = None
    if len(args) == 2:
        infile = args[0]
        outfile = args[1]
    elif len(args) == 1 and options.outputFmtMode:
        infile = args[0]
    else:
        if not options.prompt:
            parser.print_usage()
            sys.exit(-1)

    #format output mode
    if(options.outputFmtMode):
        if(infile):
            format_results(infile)
        else:
            format_results("results")
        sys.exit(0)

    orderChanged = False
    #handle defaults
    if not options.defaults:
        if(options.prompt): #(gather this info via command prompts)
            if(options.configfile == "default.cfg"):
                options.configfile = raw_input("Enter the name of your custom config file, or simply hit enter to continue with prompts:")
                if(options.configfile == ""):
                    options.configfile = "default.cfg"
            if(options.infile == None or options.configfile == "default.cfg"):
                options.infile = raw_input("Enter the name of your input file (required): ")
                check_file(options.infile)
            if(outfile == None or options.configfile == "default.cfg"):
                outfile = raw_input("Enter the desired output file name [data.js]: ")
                if(options.outfile == ""):
                    outfile = "data.js"
            if(options.configfile == "default.cfg"):
                if( (raw_input("Evenly space different item types? \nUse this option unless you have specified an order for all items (y/n)")) == 'y'):
                    options.shuffle = True
                if( (raw_input("Randomize items? \nIMPORTANT: Only use this option if you did not specify an order! (y/n)")) == 'y'):
                    options.randomize = True
                if( (raw_input("Separate all items with a filler? If no, fillers are treated as normal items. (y/n)")) == 'n'):
                    options.fillerin = False

    if (options.randomize or options.shuffle):
        orderChanged = True

    dct = {}
    dct = parse_config_file(options.configfile)

    #figure out appropriate ordering variables
    if not options.fillerin:
        dct["filler"] = "SEP_EACH"
    else:
        dct["filler"] = "ITEM"

    if orderChanged:
        if options.shuffle:
            if options.randomize:
                dct["order"] = "RSHUFFLE"
            else: dct["order"] = "SHUFFLE"
        else:
            if options.randomize:
                dct["order"] = "RANDOM"
            else:
                dct["order"] = "ORDERED"

    if infile == None:
        infile = dct["inputfile"]
    if outfile == None:
        outfile = dct["outputfile"]
    else:
        dct["outputfile"] = outfile

    items = generate_item_str(infile, multi=options.multi)
    header = generate_header(dct)

    #debug the cmd-line processor
    if options.doNothing:
        print "doing nothing:\ninput_file: " +infile+ "\noutput_file: " +outfile+ \
        "\nconfig_file: " +str(options.configfile)+"\nOrderChanged? "+str(orderChanged) \
        +"\nShuffle? "+str(options.shuffle)+"\nRandomize? "+str(options.randomize)+"\nFiller as normal item? " \
        +str(not options.fillerin) +"\n\n"+header+"\n"+items
        sys.exit(0)
    else:
        create_outfile(outfile, header, items)
