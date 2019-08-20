$(document).ready(function () {


    $("#startBtn").on("click", gameTimer.startTimer);

});

var gameTimer = {
    
   remainingTime = 30,
   startTimer = function(){
        $("#time-slot").text(gameTimer.remainingTime);
        setInterval(gameState.countdown, 1000);
        $("#startPage").hide();
        // trivia.displayQuestions();
    }
};

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
