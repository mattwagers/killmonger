var shuffleSequence = seq("intro0", "setcounter", "intro1", "practice1", "practice2", "practice3", "practice4", "practice5", "practice6", "practice7", randomize(anyOf("a","b","c","d","e","f","g","h"), "final0", "sr", "final1");

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
  as: [["f", "f"], ["j","j"]],
  randomOrder: false,
  presentAsScale: true,
  leftComment: "grammatical",
  rightComment: "ungrammatical",
  timeout: 2000
  },
  "Question", {
  as: [["1","1"],["2","2"],["3","3"]],
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

["sr", "__SendResults__", { }],

["setcounter", "__SetCounter__", { }],

["sep", "Separator", { }],

["intro0","Form",{html: { include: "intro0.html" }}],

["intro1","Form",{html: { include: "intro1.html" }}],  

["final0", "Form", {html: { include: "final0.html" } }],

["final1", "Form", {continueMessage: null, html: {include: "final1.html"} }],  

//Practice Items
[["practice1", 121], "FlashSentence", {s: "+"}, "DashedSentence", {s: "Those cats was snoring loudly."}, "QuestionExpanded", {q: "Is this sentence grammatical?"}, "Question", {q: "How confident are you in your decision?"}],
[["practice2", 122], "Message", {html: "<center><font face='helvetica' size = '4'>How was that? <br><br><br> That item is one that some, but not all, English speakers judge to be ungrammatical. <br><br><br> Let's try a few more practice items."}],
[["practice3", 123], "FlashSentence", {s: "+"}, "DashedSentence", {s: "At the ball, the prince waltzed with every girl before midnight."}, "QuestionExpanded", {q: "Is this sentence grammatical?"}, "Question", {q: "How confident are you in your decision?"}],
[["practice4", 124], "Message", {html: "<center><font face='helvetica' size = '4'> Most speakers would find that sentence to be grammatical. <br><br><br> Let's continue with the practice."}],
[["practice5", 125], "FlashSentence", {s: "+"}, "DashedSentence", {s: "Without warning, Geoffrey turned and screamed at the waiter who embarrassed itself."}, "QuestionExpanded", {q: "Is this sentence grammatical?"}, "Question", {q: "How confident are you in your decision?"}],
[["practice6",126], "FlashSentence", {s: "+"}, "DashedSentence", {s: "Madame de Plessy sat up all night worrying about her son, who was fighting the invaders."}, "QuestionExpanded", {q: "Is this sentence grammatical?"}, "Question", {q: "How confident are you in your decision?"}],
[["practice7", 127], "Message", {html: "<center><font face='helvetica' size = '4'>Alright, that's it for practice! <br><br><br> Press continue when you are ready to begin."}],
