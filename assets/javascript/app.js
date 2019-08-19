// setting up the timer for Trivia
var timeStart = 30
var intervalID;

$("#start").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second

function run() {
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number 
  $("#timeLeft").html("<h2>" + number + "</h2>");


  //  Once number hits zero, Change to scoreBoard function (to be made)
  if (number === 0) {
    $(".trivOverlay").empty()

  }
}
