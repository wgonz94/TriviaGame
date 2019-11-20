//hides the submit button
$("#done").hide()

//variables to start
var seconds = 250;
var intervalId;

// var correct = 0;
// var incorrect = 0;
// var unanswered = 0;

// event-listener for start button; also runs "runTime" function
$("#start").on("click", runTime);

// event-listener for done button; also runs "stopTime" function
$("#done").on("click", stopTime);

//when start clicked, this function runs and provides decrement of time, hides start button, 
//displays questions (question function), and shows "done" button

function runTime() {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
    $("#startPage").hide();
    questionDisplay();
    $("#done").show();
}

// when done is clicked, this function runs; hides done button, slot for time, question form, and
//shows hidden div for final tally calculations
function stopTime() {

    clearInterval(intervalId);
    $("#done").hide();
    $("#time-slot").hide()
    $("#question-form").hide();
    $(".hidden").show();
    tallyAnswers();
}

function decrement() {
    seconds--;


    $("#time-slot").html("<h3> Time remaining: " + seconds + "  seconds</h3>");

    if (seconds === 0) {
        stopTime()

    }
}

//Question bank = 8 total questions
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

//uses array and loop for question display
// * RADIO FUNCTION DOES NOT WORK! NEED TO FIX!
function questionDisplay() {



    var questionContainer = $("#question-form");

    for (var i = 0; i < triviaVault.length; i++){
        // each answer form 
        var questionForm = $("<form id='questionNumber'>")
        var question = $("<h3>" + triviaVault[i].question +"</h3>")
        questionForm.html(question)

        for ( var j = 0; j < triviaVault[i].answers.length; j++){

            

            // create radio question 
            var radio = $("<input type='radio'>" + triviaVault[i].answers[j] + "</input>" )
            
            // change with the radio attributes 
            radio.attr('name', 'answers')
            radio.attr('value', triviaVault[i].answers[j])
            // radio.text(triviaVault[i].answers[j])

            // put the radio button into the question form 
            questionForm.append(radio)
        
            console.log(questionForm)

        }


        $("#question-form").append(questionForm)
        questionContainer.append('<br>')
    }
   
};

// variables for question tally
 var correctAnswer= triviaVault[i].correct;
    var userAnswer= $(this).val()
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// adds up all the correct, incorrect, and unanswered fields
// DOES NOT ADD UP CORRECTLY! NEED TO FIX!
function tallyAnswers() {
   
    for (var i = 0; i < triviaVault.length; i++) {


        correctAnswer = triviaVault[i].correct;

        if (userAnswer === correctAnswer) {
            correct++;
        } else if (userAnswer !== correctAnswer) {
            incorrect++;
        } else {
            unanswered++;
        }
    }

    // Shows the Final Message with Score
    //
    $("#endMessage").show()
    $("#correct").text("Correct: " + correct)
    $("#incorrect").text("Incorrect: " + incorrect)
    $("#unanswered").text("unanswered: " + correct)
}



