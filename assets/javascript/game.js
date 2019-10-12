$(document).ready(function() {

var wins=0;
var losses=0;
var yourNumber=0;
// getNumber();
winOrLoss();

var computerText=$("#computer-text");
var yourNumberText=$("#yourNumber-text");
var winsText=$("#wins-text");
var lossesText=$("#losses-text");

function computerNumber () {
Math.floor(Math.random() * 101) + 19;
console.log(computerNumber);
};

var blueCrystal=Math.floor(Math.random() * 12) + 1;
var greenCrystal=Math.floor(Math.random() * 12) + 1;
var purpleCrystal=Math.floor(Math.random() * 12) + 1;
var redCrystal=Math.floor(Math.random() * 12) + 1;

function winOrLoss () {
    if (score === computerNumber) {
        wins++;
        $("#wins-text").html(winsText);
        computerNumber();
        $("#computer-text").html(computerText);
        score=0;
    }
    else if (score > computerNumber) {
        loss++;
        $("#losses-text").html(lossesText);
        computerNumber();
        ("#computer-text").html(computerText);
        score=0;
    }
}

$(".blue").on("click", function () {
    score=blueCrystal + score;
    $("#yourNumber-text").html(yourNumber);
    winOrLoss();
});

   

});

// //get number for crystals

// //function that checks win or loss.. 2 arguments. if/else

// //on click functions for each crystal

