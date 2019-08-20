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
// EXTRA CODE TO LOOK AT

// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);

// //  Step 3:
// //  Fill in the blanks to these functions.
// function fiveSeconds() {
//   // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//   // console log 10 seconds left
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }

// function tenSeconds() {
//   // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
//   // console log 5 seconds left
//   $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//   console.log("5 seconds left");
// }

// function timeUp() {
//   // in the element with an id of time-left add an h2 saying Time's Up!
//   // console log done
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");
// }
