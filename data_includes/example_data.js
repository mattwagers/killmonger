var shuffleSequence = seq("setcounter", "practice1", "practice2", "practice3", "practice4", "practice5", "practice6", "practice7", randomize(anyOf("a", "b", "c", "d", "e", "f", "g", "h")), "sr");

        var practiceItemTypes = ["practice"];

        var defaults = [
            "Separator", {
                transfer: 1000,
                normalMessage: "Please wait for the next sentence.",
                errorMessage: "Wrong. Please wait for the next sentence."
            },
            "DashedSentence", {
                mode: "speeded acceptability",
                wordTime: 225,
                wordPauseTime: 100,
                display: "in place"
            },
            "QuestionExpanded", {
                as: [
                    ["f", "f"],
                    ["j", "j"]
                ],
                randomOrder: false,
                presentAsScale: true,
                leftComment: "grammatical",
                rightComment: "ungrammatical",
                timeout: 2000
            },
            "Question", {
                as: [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"]
                ],
                randomOrder: false,
                presentAsScale: true,
                leftComment: "not at all confident",
                rightComment: "very confident",
                timeout: null
            },
            "Message", {
                hideProgressBar: true
            },
            "Form", {
                hideProgressBar: true,
                continueOnReturn: true,
                saveReactionTime: true
            },
            "FlashSentence", {
                timeout: 1000
            }
        ];

        var items = [

            ["sr", "__SendResults__", {}],

            ["setcounter", "__SetCounter__", {}],

            ["sep", "Separator", {}],

            //["intro0","Form",{html: { include: "intro0.html" }}],

            //["intro1","Form",{html: { include: "intro1.html" }}],  

            //["final0", "Form", {html: { include: "final0.html" } }],

            //["final1", "Form", {continueMessage: null, html: {include: "final1.html"} }],  

            //Practice Items
            [
                ["practice1", 121], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Those cats was snoring loudly."
                }, "QuestionExpanded", {
                    q: "Is this sentence grammatical?"
                }, "Question", {
                    q: "How confident are you in your decision?"
                }
            ],
            [
                ["practice2", 122], "Message", {
                    html: "<center><font face='helvetica' size = '4'>How was that? <br><br><br> That item is one that some, but not all, English speakers judge to be ungrammatical. <br><br><br> Let's try a few more practice items."
                }
            ],
            [
                ["practice3", 123], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "At the ball, the prince waltzed with every girl before midnight."
                }, "QuestionExpanded", {
                    q: "Is this sentence grammatical?"
                }, "Question", {
                    q: "How confident are you in your decision?"
                }
            ],
            [
                ["practice4", 124], "Message", {
                    html: "<center><font face='helvetica' size = '4'> Most speakers would find that sentence to be grammatical. <br><br><br> Let's continue with the practice."
                }
            ],
            [
                ["practice5", 125], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Without warning, Geoffrey turned and screamed at the waiter who embarrassed itself."
                }, "QuestionExpanded", {
                    q: "Is this sentence grammatical?"
                }, "Question", {
                    q: "How confident are you in your decision?"
                }
            ],
            [
                ["practice6", 126], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Madame de Plessy sat up all night worrying about her son, who was fighting the invaders."
                }, "QuestionExpanded", {
                    q: "Is this sentence grammatical?"
                }, "Question", {
                    q: "How confident are you in your decision?"
                }
            ],
            [
                ["practice7", 127], "Message", {
                    html: "<center><font face='helvetica' size = '4'>Alright, that's it for practice! <br><br><br> Press continue when you are ready to begin."
                }
            ],
            //Experimental Items
            //Experimental Items
            [
                ["a", 1], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think that the new professor isn't going to persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 1], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the new professor isn't going to persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 1], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which donor do you think that the new professor isn't going to persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 1], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which donor thinks that the new professor isn't going to persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 1], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think that the new professor isn't going to persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 1], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the new professor isn't going to persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 1], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which donor do you think that the new professor isn't going to persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 1], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which donor thinks that the new professor isn't going to persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 2], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you suppose that the new boss won't include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 2], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who supposes that the new boss won't include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 2], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which worker do you suppose that the new boss won't include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 2], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which worker supposes that the new boss won't include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 2], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you suppose that the new boss won't include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 2], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who supposes that the new boss won't include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 2], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which worker do you suppose that the new boss won't include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 2], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which worker supposes that the new boss won't include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 3], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you feel that the article will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 3], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who feels that the article will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 3], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which politician do you feel that the article will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 3], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which politician feels that the article will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 3], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you feel that the article will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 3], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who feels that the article will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 3], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which politician do you feel that the article will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 3], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which politician feels that the article will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 4], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you assume that the controversial politician would praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 4], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the controversial politican would praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 4], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which author do you assume that the controversial politician would praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 4], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which author assumes that the controversial politican would praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 4], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you assume that the controversial politician would praise anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 4], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the controversial politician would praise anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 4], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which author do you assume that the controversial politician would praise anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 4], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which author assumes that the controversial politican would praise anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 5], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you allege that the secretive publisher has protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 5], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who alleges that the secretive publisher has protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 5], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which senator do you allege that the secretive publisher has protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 5], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which senator alleges that the secretive publisher has protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 5], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you allege that the secretive publisher has protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 5], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who alleges that the secretive publisher has protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 5], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which senator do you allege that the secretive publisher has protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 5], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which senator alleges that the secretive publisher has protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 6], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you argue that the social secretary should invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 6], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who argues that the social secretary should invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 6], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity do you argue that the social secretary should invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 6], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity argues that the social secretary should invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 6], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you argue that the social secretary should invite someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 6], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who argues that the social secretary should invite someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 6], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity do you argue that the social secretary should invite someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 6], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity argues that the social secretary should invite someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 7], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you sure that the talented kid could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 7], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the talented kid could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 7], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which teacher are you sure that the talented kid could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 7], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which teacher is sure that the talented kid could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 7], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you sure  that the talented kid could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 7], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the talented kid could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 7], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which teacher are you sure that the talented kid could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 7], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which teacher is sure that the talented kid could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 8], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you certain that the rookie agent can't guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 8], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is certain that the rookie agent can't guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 8], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which witness are you certain that the rookie agent can't guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 8], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which witness is certain that the rookie agent can't guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 8], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you certain that the rookie agent can't guard anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 8], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is certain that the rookie agent can't guard anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 8], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which witnes are you certain that the rookie agent can't guard anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 8], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which witness is certain that the rookie agent can't guard anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 9], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think that the overworked manager should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 9], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the overworked manager should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 9], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which consultant do you think that the overworked manager should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 9], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which consultant thinks that the overworked manager should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 9], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think that the overworked manager should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 9], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the overworked manager should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 9], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which consultant do you think that the overworked manager should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 9], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which consultant thinks that the overworked manager should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 10], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you assume that the crooked CEO could persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 10], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the crooked CEO could persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 10], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shareholder do you assume that the crooked CEO could persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 10], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shareholder assumes that the crooked CEO could persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 10], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you assume that the crooked CEO could persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 10], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the crooked CEO could persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 10], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shareholder do you assume that the crooked CEO could persuade anyone? "
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 10], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shareholder assumes that the crooked CEO could persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 11], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who don't you believe that the parrot could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 11], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who doesn't believe that the parrot could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 11], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diva don't you believe that the parrot could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 11], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diva doesn't believe that the parrot could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 11], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who don't you believe that the parrot could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 11], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who doesn't believe that the parrot could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 11], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diva don't you believe that the parrot could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 11], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diva doesn't believe that the parrot could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 12], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you predict that the rumor will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 12], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who predicts that the rumor will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 12], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which actor do you predict that the rumor will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 12], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which actor predicts that the rumor will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 12], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you predict that the rumor will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 12], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who predicts that the rumor will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 12], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which actor do you predict that the rumor will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 12], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which actor predicts that the rumor will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 13], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did you say that the unpredictable dictator has praised?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 13], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who says that the unpredictable dictator has praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 13], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which philosopher did you say that the unpredictable dictator has praised?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 13], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which philosopher said that the unpredictable dictator has praised?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 13], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did you say that the unpredictable dictator has praised someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 13], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who said that the unpredictable dictator has praised someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 13], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which philosopher did you say that the unpredictable dictator has praised someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 13], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which philosopher said that the unpredictable dictator has praised someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 14], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who were you surprised that the conference organizers couldn't invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 14], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was surprised that the conference organizers couldn't invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 14], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which speaker were you surprised that the conference organizers couldn't invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 14], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which speaker was surprised that the conference organizers couldn't invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 14], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who were you surprised that the conference organizers couldn't invite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 14], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was surprised that the conference organizers couldn't invite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 14], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which speaker were you surprised that the conference organizers couldn't invite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 14], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which speaker was surprised that the conference organizers couldn't invite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 15], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think the accountant should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 15], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the accountant should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 15], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which lawyer do you think the accountant should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 15], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which lawyer thinks the accountant should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 15], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think the accountant should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 15], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the accountant should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 15], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which lawyer do you think the accountant should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 15], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which lawyer thinks the accountant should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 16], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who were you sure that the coach would include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 16], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was sure that the coach would include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 16], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player are you sure that the coach would include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 16], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player is sure that the coach would include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 16], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you sure that the coach would include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 16], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the coach would include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 16], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player are you sure that the coach would include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 16], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player is sure that the coach would include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 17], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone suppose that the new plan won't excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 17], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who supposes that the new plan won't excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 17], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which voters does everyone suppose that the new plan won't excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 17], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which voters suppose that the new plan won’t excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 17], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone suppose that the new plan won't excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 17], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who supposes that the new plan won't excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 17], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which voters does everyone suppose that the new plan won't excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 17], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which voters suppose that the new plan won't excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 18], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is Mary convinced that the authorities should arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 18], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is convinced that the authorities should arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 18], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which aide is Mary convinced that the authorities should arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 18], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which aide is convinced that the the investigators should arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 18], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is Mary convinced that the authorities should arrest someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 18], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is convinced that the authorities should arrest someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 18], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which aide is Mary convinced that the authorities should arrest someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 18], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which aide is convinced that the authorities should arrest someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 19], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone assume that the board of directors will appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 19], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the board of directors will appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 19], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which executive does everyone assume that the board of directors will appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 19], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which executive assumes that the board of directors will appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 19], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone assume that the board of directors will appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 19], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the board of directors will appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 19], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which executive does everyone assume that the board of directors will appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 19], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which executive assumes that the board of directors will appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 20], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is everyone sure that the witness will recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 20], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the witness will recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 20], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which accomplice is everyone sure that the bystander will recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 20], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which accomplice is sure that the witness will recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 20], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is everyone sure that the witness will recognize someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 20], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the witness will recognize someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 20], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which accomplice is everyone sure that the bystander will recognize someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 20], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which accomplice is sure that the witness will recognize someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 21], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who will John be delighted that the columnist protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 21], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who will be delighted that the columnist protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 21], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which critic will John be delighted that the columnist protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 21], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which critic will be delighted that the columnist protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 21], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who will John be delighted that the columnist protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 21], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who will be delighted that the columnist protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 21], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which critic will John be delighted that the columnist protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 21], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which critic will be delighted that the columnist protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 22], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did Jen suggest that the nurse should comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 22], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who suggested that the nurse should comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 22], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which patient did Jen suggest that the nurse should comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 22], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which patient suggested that the nurse should comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 22], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did Jen suggest that the nurse should comfort someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 22], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who suggested that the nurse should comfort someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 22], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which patient did Jen suggest that the nurse should comfort someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 22], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which patient suggested that the nurse should comfort someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 23], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was Mark aware that the contractor wouldn't need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 23], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was aware that the contractor wouldn't need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 23], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which carpenter was Mark aware that the contractor wouldn't need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 23], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which carpenter was aware that the contractor wouldn't need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 23], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was Mark aware that the contractor wouldn't need anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 23], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was aware that the contractor wouldn't need anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 23], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which carpenter was Mark aware that the contractor wouldn't need anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 23], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which carpenter was aware that the contractor wouldn't need anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 24], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone feel that the new teacher might terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 24], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who felt that the new teacher might terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 24], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which students did everyone feel that the new teacher might terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 24], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which students felt that the new teacher might terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 24], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone feel that the new teacher might terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 24], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who felt that the new teacher might terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 24], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which students did everyone feel that the new teacher might terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 24], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which students felt that the new teacher might terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 25], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does Nora suspect that the judge must appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 25], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who suspects that the judge must appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 25], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which guardian does Nora suspect that the judge must appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 25], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which guardian suspects that the judge must appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 25], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does Nora suspect that the judge must appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 25], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who suspects that the judge must appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 25], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which guardian does Nora suspect that the judge must appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 25], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which guardian suspects that the judge must appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 26], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is everyone surprised that the FBI didn’t arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 26], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is surprised that the FBI didn’t arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 26], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbroker is everyone surprised that the FBI didn’t arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 26], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbroker is surprised that the FBI didn’t arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 26], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is everyone surprised that the FBI didn’t arrest anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 26], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is surprised that the FBI didn’t arrest anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 26], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbroker is everyone surprised that the FBI didn’t arrest anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 26], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbroker is surprised that the FBI didn’t arrest anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 27], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t Pete convinced that the therapist can comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 27], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t convinced that the therapist can comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 27], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which survivor isn’t Pete convinced that the therapist can comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 27], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which survivor isn’t convinced that the therapist can comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 27], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t Pete convinced that the therapist can comfort anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 27], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t convinced that the therapist can comfort anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 27], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which survivor isn’t Pete convinced that the therapist can comfort anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 27], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which survivor isn’t convinced that the therapist can comfort anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 28], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is nobody certain that the politician can excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 28], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t certain that the politician can excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 28], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which partisans is nobody certain that the politician can excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 28], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which partisans aren’t certain that the politician can excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 28], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is nobody certain that the politician can excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 28], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t certain that the politician can excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 28], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which partisans is nobody certain that the politician can excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 28], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which partisans aren’t certain that the politician can excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 29], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is Selena adamant that the captain should guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 29], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is adamant that the captain should guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 29], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diplomat is Selena adamant that the captain should guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 29], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diplomat is adamant that the captain should guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 29], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is Selena adamant that the captain should guard someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 29], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is adamant that the captain should guard someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 29], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diplomat is Selena adamant that the captain should guard someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 29], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diplomat is adamant that the captain should guard someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 30], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone know that the executive is going to need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 30], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who knows that the executive is going to need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 30], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which assistant does everyone know that the executive is going to need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 30], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which assistant knows that the executive is going to need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 30], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone know that the executive is going to need someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 30], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who knows that the executive is going to need someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 30], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which assistant does everyone know that the executive is going to need someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 30], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which assistant knows that the executive is going to need someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 31], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was Tom worried that the patient couldn’t recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 31], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was worried that the patient couldn’t recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 31], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which relatives was Tom worried that the patient couldn’t recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 31], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which relatives were worried that the patient couldn’t recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 31], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was Tom worried that the patient couldn’t recognize anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 31], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was worried that the patient couldn’t recognize anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 31], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which relatives was Tom worried that the patient couldn’t recognize anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 31], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which relatives were worried that the patient couldn’t recognize anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 32], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone predict that the new principal was going to terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 32], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who predicted that the new principal was going to terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 32], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which counselor did everyone predict that the new principal was going to terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 32], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which counselor predicted that the new principal was going to terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 32], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone predict that the new principal was going to terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 32], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who predicted that the new principal was going to terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 32], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which counselor did everyone predict that the new principal was going to terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 32], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which counselor predicted that the new principal was going to terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 33], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think that the new professor isn't going to persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 33], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the new professor isn't going to persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 33], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which donor do you think that the new professor isn't going to persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 33], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which donor thinks that the new professor isn't going to persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 33], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think that the new professor isn't going to persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 33], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the new professor isn't going to persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 33], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which donor do you think that the new professor isn't going to persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 33], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which donor thinks that the new professor isn't going to persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 34], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you suppose that the new boss won't include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 34], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who supposes that the new boss won't include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 34], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which worker do you suppose that the new boss won't include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 34], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which worker supposes that the new boss won't include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 34], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you suppose that the new boss won't include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 34], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who supposes that the new boss won't include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 34], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which worker do you suppose that the new boss won't include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 34], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which worker supposes that the new boss won't include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 35], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you feel that the article will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 35], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who feels that the article will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 35], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which politician do you feel that the article will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 35], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which politician feels that the article will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 35], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you feel that the article will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 35], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who feels that the article will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 35], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which politician do you feel that the article will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 35], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which politician feels that the article will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 36], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you assume that the controversial politician would praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 36], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the controversial politican would praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 36], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which author do you assume that the controversial politician would praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 36], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which author assumes that the controversial politican would praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 36], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you assume that the controversial politician would praise anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 36], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the controversial politician would praise anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 36], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which author do you assume that the controversial politician would praise anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 36], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which author assumes that the controversial politican would praise anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 37], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you allege that the secretive publisher has protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 37], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who alleges that the secretive publisher has protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 37], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which senator do you allege that the secretive publisher has protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 37], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which senator alleges that the secretive publisher has protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 37], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you allege that the secretive publisher has protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 37], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who alleges that the secretive publisher has protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 37], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which senator do you allege that the secretive publisher has protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 37], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which senator alleges that the secretive publisher has protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 38], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you argue that the social secretary should invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 38], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who argues that the social secretary should invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 38], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity do you argue that the social secretary should invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 38], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity argues that the social secretary should invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 38], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you argue that the social secretary should invite someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 38], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who argues that the social secretary should invite someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 38], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity do you argue that the social secretary should invite someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 38], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity argues that the social secretary should invite someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 39], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you sure that the talented kid could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 39], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the talented kid could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 39], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which teacher are you sure that the talented kid could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 39], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which teacher is sure that the talented kid could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 39], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you sure  that the talented kid could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 39], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the talented kid could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 39], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which teacher are you sure that the talented kid could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 39], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which teacher is sure that the talented kid could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 40], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you certain that the rookie agent can't guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 40], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is certain that the rookie agent can't guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 40], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which witness are you certain that the rookie agent can't guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 40], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which witness is certain that the rookie agent can't guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 40], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you certain that the rookie agent can't guard anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 40], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is certain that the rookie agent can't guard anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 40], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which witnes are you certain that the rookie agent can't guard anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 40], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which witness is certain that the rookie agent can't guard anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 41], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think that the overworked manager should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 41], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the overworked manager should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 41], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which consultant do you think that the overworked manager should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 41], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which consultant thinks that the overworked manager should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 41], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think that the overworked manager should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 41], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the overworked manager should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 41], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which consultant do you think that the overworked manager should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 41], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which consultant thinks that the overworked manager should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 42], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you assume that the crooked CEO could persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 42], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the crooked CEO could persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 42], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shareholder do you assume that the crooked CEO could persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 42], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shareholder assumes that the crooked CEO could persuade?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 42], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you assume that the crooked CEO could persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 42], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the crooked CEO could persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 42], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shareholder do you assume that the crooked CEO could persuade anyone? "
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 42], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shareholder assumes that the crooked CEO could persuade anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 43], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who don't you believe that the parrot could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 43], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who doesn't believe that the parrot could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 43], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diva don't you believe that the parrot could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 43], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diva doesn't believe that the parrot could imitate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 43], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who don't you believe that the parrot could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 43], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who doesn't believe that the parrot could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 43], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diva don't you believe that the parrot could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 43], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diva doesn't believe that the parrot could imitate anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 44], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you predict that the rumor will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 44], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who predicts that the rumor will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 44], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which actor do you predict that the rumor will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 44], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which actor predicts that the rumor will bother?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 44], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you predict that the rumor will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 44], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who predicts that the rumor will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 44], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which actor do you predict that the rumor will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 44], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which actor predicts that the rumor will bother someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 45], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did you say that the unpredictable dictator has praised?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 45], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who says that the unpredictable dictator has praise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 45], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which philosopher did you say that the unpredictable dictator has praised?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 45], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which philosopher said that the unpredictable dictator has praised?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 45], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did you say that the unpredictable dictator has praised someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 45], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who said that the unpredictable dictator has praised someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 45], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which philosopher did you say that the unpredictable dictator has praised someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 45], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which philosopher said that the unpredictable dictator has praised someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 46], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who were you surprised that the conference organizers couldn't invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 46], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was surprised that the conference organizers couldn't invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 46], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which speaker were you surprised that the conference organizers couldn't invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 46], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which speaker was surprised that the conference organizers couldn't invite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 46], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who were you surprised that the conference organizers couldn't invite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 46], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was surprised that the conference organizers couldn't invite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 46], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which speaker were you surprised that the conference organizers couldn't invite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 46], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which speaker was surprised that the conference organizers couldn't invite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 47], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think the accountant should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 47], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the accountant should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 47], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which lawyer do you think the accountant should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 47], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which lawyer thinks the accountant should employ?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 47], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you think the accountant should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 47], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who thinks that the accountant should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 47], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which lawyer do you think the accountant should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 47], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which lawyer thinks the accountant should employ someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 48], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who were you sure that the coach would include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 48], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was sure that the coach would include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 48], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player are you sure that the coach would include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 48], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player is sure that the coach would include?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 48], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who are you sure that the coach would include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 48], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the coach would include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 48], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player are you sure that the coach would include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 48], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player is sure that the coach would include anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 49], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone suppose that the new plan won't excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 49], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who supposes that the new plan won't excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 49], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which voters does everyone suppose that the new plan won't excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 49], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which voters suppose that the new plan won’t excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 49], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone suppose that the new plan won't excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 49], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who supposes that the new plan won't excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 49], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which voters does everyone suppose that the new plan won't excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 49], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which voters suppose that the new plan won't excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 50], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is Mary convinced that the authorities should arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 50], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is convinced that the authorities should arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 50], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which aide is Mary convinced that the authorities should arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 50], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which aide is convinced that the the investigators should arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 50], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is Mary convinced that the authorities should arrest someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 50], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is convinced that the authorities should arrest someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 50], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which aide is Mary convinced that the authorities should arrest someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 50], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which aide is convinced that the authorities should arrest someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 51], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone assume that the board of directors will appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 51], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the board of directors will appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 51], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which executive does everyone assume that the board of directors will appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 51], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which executive assumes that the board of directors will appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 51], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone assume that the board of directors will appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 51], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who assumes that the board of directors will appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 51], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which executive does everyone assume that the board of directors will appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 51], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which executive assumes that the board of directors will appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 52], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is everyone sure that the witness will recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 52], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the witness will recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 52], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which accomplice is everyone sure that the bystander will recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 52], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which accomplice is sure that the witness will recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 52], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is everyone sure that the witness will recognize someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 52], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is sure that the witness will recognize someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 52], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which accomplice is everyone sure that the bystander will recognize someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 52], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which accomplice is sure that the witness will recognize someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 53], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who will John be delighted that the columnist protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 53], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who will be delighted that the columnist protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 53], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which critic will John be delighted that the columnist protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 53], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which critic will be delighted that the columnist protected?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 53], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who will John be delighted that the columnist protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 53], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who will be delighted that the columnist protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 53], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which critic will John be delighted that the columnist protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 53], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which critic will be delighted that the columnist protected someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 54], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did Jen suggest that the nurse should comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 54], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who suggested that the nurse should comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 54], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which patient did Jen suggest that the nurse should comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 54], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which patient suggested that the nurse should comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 54], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did Jen suggest that the nurse should comfort someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 54], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who suggested that the nurse should comfort someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 54], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which patient did Jen suggest that the nurse should comfort someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 54], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which patient suggested that the nurse should comfort someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 55], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was Mark aware that the contractor wouldn't need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 55], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was aware that the contractor wouldn't need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 55], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which carpenter was Mark aware that the contractor wouldn't need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 55], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which carpenter was aware that the contractor wouldn't need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 55], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was Mark aware that the contractor wouldn't need anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 55], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was aware that the contractor wouldn't need anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 55], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which carpenter was Mark aware that the contractor wouldn't need anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 55], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which carpenter was aware that the contractor wouldn't need anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 56], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone feel that the new teacher might terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 56], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who felt that the new teacher might terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 56], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which students did everyone feel that the new teacher might terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 56], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which students felt that the new teacher might terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 56], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone feel that the new teacher might terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 56], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who felt that the new teacher might terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 56], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which students did everyone feel that the new teacher might terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 56], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which students felt that the new teacher might terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 57], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does Nora suspect that the judge must appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 57], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who suspects that the judge must appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 57], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which guardian does Nora suspect that the judge must appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 57], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which guardian suspects that the judge must appoint?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 57], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does Nora suspect that the judge must appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 57], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who suspects that the judge must appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 57], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which guardian does Nora suspect that the judge must appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 57], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which guardian suspects that the judge must appoint someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 58], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is everyone surprised that the FBI didn’t arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 58], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is surprised that the FBI didn’t arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 58], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbroker is everyone surprised that the FBI didn’t arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 58], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbroker is surprised that the FBI didn’t arrest?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 58], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is everyone surprised that the FBI didn’t arrest anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 58], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is surprised that the FBI didn’t arrest anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 58], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbroker is everyone surprised that the FBI didn’t arrest anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 58], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbroker is surprised that the FBI didn’t arrest anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 59], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t Pete convinced that the therapist can comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 59], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t convinced that the therapist can comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 59], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which survivor isn’t Pete convinced that the therapist can comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 59], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which survivor isn’t convinced that the therapist can comfort?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 59], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t Pete convinced that the therapist can comfort anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 59], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t convinced that the therapist can comfort anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 59], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which survivor isn’t Pete convinced that the therapist can comfort anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 59], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which survivor isn’t convinced that the therapist can comfort anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 60], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is nobody certain that the politician can excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 60], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t certain that the politician can excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 60], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which partisans is nobody certain that the politician can excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 60], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which partisans aren’t certain that the politician can excite?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 60], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is nobody certain that the politician can excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 60], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who isn’t certain that the politician can excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 60], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which partisans is nobody certain that the politician can excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 60], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which partisans aren’t certain that the politician can excite anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 61], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is Selena adamant that the captain should guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 61], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is adamant that the captain should guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 61], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diplomat is Selena adamant that the captain should guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 61], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diplomat is adamant that the captain should guard?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 61], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is Selena adamant that the captain should guard someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 61], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who is adamant that the captain should guard someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 61], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diplomat is Selena adamant that the captain should guard someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 61], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which diplomat is adamant that the captain should guard someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 62], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone know that the executive is going to need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 62], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who knows that the executive is going to need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 62], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which assistant does everyone know that the executive is going to need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 62], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which assistant knows that the executive is going to need?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 62], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone know that the executive is going to need someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 62], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who knows that the executive is going to need someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 62], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which assistant does everyone know that the executive is going to need someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 62], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which assistant knows that the executive is going to need someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 63], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was Tom worried that the patient couldn’t recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 63], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was worried that the patient couldn’t recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 63], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which relatives was Tom worried that the patient couldn’t recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 63], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which relatives were worried that the patient couldn’t recognize?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 63], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was Tom worried that the patient couldn’t recognize anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 63], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who was worried that the patient couldn’t recognize anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 63], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which relatives was Tom worried that the patient couldn’t recognize anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 63], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which relatives were worried that the patient couldn’t recognize anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 64], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone predict that the new principal was going to terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 64], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who predicted that the new principal was going to terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 64], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which counselor did everyone predict that the new principal was going to terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 64], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which counselor predicted that the new principal was going to terrify?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["e", 64], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone predict that the new principal was going to terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 64], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who predicted that the new principal was going to terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["g", 64], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which counselor did everyone predict that the new principal was going to terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["h", 64], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which counselor predicted that the new principal was going to terrify someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 65], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did you hear the claim that the politican would visit?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 65], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which dissident did you hear the claim that the politician would visit?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 65], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who heard the claim that the politician would visit?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 65], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which dissident heard the claim that the politician would visit?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 66], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you wonder who will worship?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 66], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shaman do you wonder who will worship?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 66], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who wonders who will worship?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 66], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which shaman wonders who will worship?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 67], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you approve of the plan that the administrator should mentor someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 67], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which employee do you approve of the plan that the administrator should mentor someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 67], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who approves of the plan that the administrator will mentor someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 67], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which employee approves of the plan that the administrator will mentor someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 68], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who do you wonder who will coach someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 68], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which rookie do you wonder who will coach someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 68], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who wonders who will coach someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 68], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which rookies wonders who will coach someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 69], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who should everyone accept the fact that the legislature won’t govern? "
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 69], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which residents should everyone accept the fact that the legislature won't govern?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 69], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who accepts the fact that the legislature won’t govern?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 69], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which residents accept the fact that the legislature won't govern?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 70], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone know whether we ought to investigate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 70], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbrokers does everyone know whether we ought to investigate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 70], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone know whether we ought to investigate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 70], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which stockbrokers does everyone know whether we ought to investigate?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 71], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone believe the rumor that the agents arrested someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 71], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which journalist did everyone believe the rumor that the agents arrested someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 71], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who believed the rumor that the agents arrested someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 71], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which journalist believed the rumor that the agents arrested someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 72], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does everyone know whether the governor wouldn’t appoint anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 72], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which judge does everyone know whether the governor wouldn’t appoint anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 72], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who knows whether the governor wouldn’t appoint anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 72], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which judge knows whether the governor wouldn’t appoint anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 73], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does Laura remember the proposal that the minister should advise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 73], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which parishioner does Laura remember the proposal that the minister should advise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 73], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who remembers the proposal that the minister should advise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 73], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which parishioner remembers the proposal that the minister should advise?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 74], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who does Ned ask himself who is watching?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 74], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which child does Ned ask himself who is watching?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 74], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who asks himself who is watching?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 74], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which child asks himself who is watching?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 75], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did Otto receive the news that the senator wasn’t mourning anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 75], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which journalist did Otto receive the news that the senator wasn’t mourning anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 75], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who received the news that the senator wasn’t mourning anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 75], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which journalist received the news that the senator wasn’t mourning anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["a", 76], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did Pam ponder who should visit someone? "
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["b", 76], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which elder did Pam ponder who should visit someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["c", 76], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who pondered who should visit someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["d", 76], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which elder pondered who should visit someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 77], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who heard the claim about that would shock everyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 78], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did Quentin make a remark about that would be disqualifying?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 79], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which gamer wrote an essay for that would be incriminating?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 80], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which artist did Reba design a sculpture for that would inspire everyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 81], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who wondered aloud to whether the weather would be pleasant?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 82], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did you ask if they could recommend someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 83], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which prankster didn’t seem to that the joke would amuse anyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 84], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which clerk did it seem to you that the manager should promote?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 85], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who loves the news about that excited everyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 86], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did everyone send a message to that went viral?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 87], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which designer offered a job to that would challenge?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 88], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which celebrity does everyone have an opinion about that might offend someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 89], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who inquired of whether the homework was due?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 90], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did Susan ask whether the students knew anything?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 91], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which singer confided in that her music wasn't for everyone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 92], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which friend did Tito assure that he was healthy?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 93], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who believes in the claim that exercising with can improve?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 94], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Who did you discover for a fact played the ukelele for someone?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 95], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which player was unsure about during the contract negotiation?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ],
            [
                ["f", 96], "FlashSentence", {
                    s: "+"
                }, "DashedSentence", {
                    s: "Which comedian did you know without a doubt would make make an appearance?"
                }, "QuestionExpanded", {
                    q: "Acceptable?"
                }, "Question", {
                    q: "How confident are you?"
                }
            ]
        ];
