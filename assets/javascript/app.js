var seconds = 30;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$("#start").on("click", runTime);

// $("#stop").on("click", stopTime);

function runTime() {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
    $("#startPage").hide();
    questionDisplay();
}

function decrement() {
    seconds--;

    $("#time-slot").html("<h3> Time remaining: " + seconds + "  seconds</h3>");
}

var triviaVault = [
    {
        question: "What is Spiderman's true identity?",
        answers: ["Eddie Brock", "Gwen Stacey", "Peter Parker", "Steve Rogers"],
        correct: "Peter Parker"
    },

    {
        question: "Which one of these characters is NOT a Superhero?",
        answers: ["Iceman", "The Punisher", "DareDevil", "Black Panther"],
        correct: "The Punisher"
    },

    {
        question: "Who created Ultron? (Hint: Not referencing the Marvel Cinematic Universe)",
        answers: ["Tony Stark", "Reed Richards", "Hank Pym", "The Mandarin"],
        correct: "Hank Pym"
    },

    {
        question: "What is the DareDevil's/ Matt Murdock's occupation?",
        answers: ["Detective", "Lawyer", "Boxer", "Judge"],
        correct: "Lawyer"
    },

    {
        question: "Who founded the X-Men?",
        answers: ["S.H.I.E.L.D", "SpiderMan", "X-Force", "Charles Xavier"],
        correct: "Charles Xavier"
    },

    {
        question: "Who was the first Super Solider?",
        answers: ["Wolverine", "Bucky Barnes", "Steve Rogers", "Natasha Romanova"],
        correct: "Steve Rogers"
    },

    {
        question: "What happened to Bruce Banner when he was accidently exposed to Gamma Rays?",
        answers: ["Turned into the Hulk", "Nothing", "Death", "Cried"],
        correct: "Turned into the Hulk"
    },

    {
        question: "Who is the leader of the Fantastic 4?",
        answers: ["Johnny Storm", "Mr.Fantastic", "Danny Rand", "Dr.Doom"],
        correct: "Mr.Fantastic"
    }

]
function questionDisplay(){

   
    
    var questionContainer = $("#question-form");
    $("#question-form").prepend("<h4>Answer questions before time runs out!</h4>")
   
    //Question #1
    $("#question-form").append("<div id= 'question-form'>#1. " +triviaVault[0].question + "</div>")

    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[0].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[0].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[0].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[0].answers[3] + "</div>")
}



 
