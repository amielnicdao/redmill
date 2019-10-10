var randomNumber=[];
var crystalNumber=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var wins=0;
var losses=0;
var score=0;
getNumber();

var computerText=$("computer-text");
var userText=$("user-text");
var winsText=$("#wins-text");
var lossesText=$("#losses-text");

function getNumber() {
    randomNumber=Math.floor(Math.random() * 101) + 19;
    console.log(randomNumber);
}

// $(document).ready(function() {


// };
