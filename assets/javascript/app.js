$("#done").hide()

var seconds = 30;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$("#start").on("click", runTime);

$("#done").on("click", stopTime);

function runTime() {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
    $("#startPage").hide();
    questionDisplay();
    $("#done").show();
}
function stopTime() {

    clearInterval(intervalId);
  }

function decrement() {
    seconds--;

    $("#time-slot").html("<h3> Time remaining: " + seconds + "  seconds</h3>");
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
function questionDisplay(){

   
    
    var questionContainer = $("#question-form");
    $("#question-form").prepend("<h4>Answer questions before time runs out!</h4>")
   
    //Question #1
    $("#question-form").append("<div id= 'question-form'>#1. " +triviaVault[0].question + "</div>")
    //Choices #1
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[0].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[0].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[0].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[0].answers[3] + "</div>")

    //line-break
    questionContainer.append("<br>")

    //Question 2
    questionContainer.append("<div id= 'question-form'>#2. " +triviaVault[1].question + "</div>")

    //Choices 2
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[1].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[1].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[1].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[1].answers[3] + "</div>")

    //line-break
    questionContainer.append("<br>")

    //Question 3
    questionContainer.append("<div id= 'question-form'>#3. " +triviaVault[2].question + "</div>")
    //Choices 3
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[2].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[2].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[2].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[2].answers[3] + "</div>")

    //line-break
    questionContainer.append("<br>")

    //Question 4
    questionContainer.append("<div id= 'question-form'>#4. " +triviaVault[3].question + "</div>")
    //Choices 4
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[3].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[3].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[3].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[3].answers[3] + "</div>")

    //line-break
    questionContainer.append("<br>")

    //Question 5
    questionContainer.append("<div id= 'question-form'>#5. " +triviaVault[4].question + "</div>")
    //Choices 5
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[4].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[4].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[4].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[4].answers[3] + "</div>")

    //line-break
    questionContainer.append("<br>")

    //Question 6
    questionContainer.append("<div id= 'question-form'>#6. " +triviaVault[5].question + "</div>")
    //Choices 6
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[5].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[5].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[5].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[5].answers[3] + "</div>")

    //line-break
    questionContainer.append("<br>")

    //Question 7
    questionContainer.append("<div id= 'question-form'>#7. " +triviaVault[6].question + "</div>")
    //Choices 7
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[6].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[6].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[6].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[6].answers[3] + "</div>")

    //line-break
    questionContainer.append("<br>")

    //Question 8
    questionContainer.append("<div id= 'question-form'>#8. " +triviaVault[7].question + "</div>")
    //Choices 8
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[7].answers[0] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[7].answers[1] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[7].answers[2] + "</div>")
    $("#question-form").append("<div id= 'question-form'><input type='radio' value= 'choice1'>" + triviaVault[7].answers[3] + "</div>")










}



 
