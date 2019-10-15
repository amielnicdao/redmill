$(document).ready(function () {

    var compNumber = Math.floor(Math.random() * 101) + 19;
    var gamerNumber = 0;
    var wins = 0;
    var losses = 0;

    $("#computer-text").text("Match this number: " + compNumber);
    $("#yourNumber-text").text("Your current number: " + gamerNumber);
    $("#wins-text").text("Wins: " + wins);
    $("#losses-text").text("Losses: " + losses);

    var blue;
    var green;
    var purple;
    var red;

    function chooseValues() {
            blue = Math.floor(Math.random() * 12) + 1;
            green = Math.floor(Math.random() * 12) + 1;
            purple = Math.floor(Math.random() * 12) + 1;
            red = Math.floor(Math.random() * 12) + 1;
    }

    function startGame() {
            compNumber = Math.floor(Math.random() * 101) + 19;
            $("#computer-text").text("Match this number: " + compNumber);
            chooseValues();
            gamerNumber = 0;
            $("#yourNumber-text").text("Your current number: " + gamerNumber);
    }

    function winOrLose() {
            if (gamerNumber == compNumber) {
                    wins++;
                    $("#wins-text").text("Wins: " + wins);
                    startGame();
            }

            else if (gamerNumber > compNumber) {
                    losses++;
                    $("#losses-text").text("Losses: " + losses);
                    startGame();
            }
    }

    function handleClick(color){
            gamerNumber = gamerNumber + color;
            $("#yourNumber-text").text("Your current number: " + gamerNumber);
            winOrLose();
    }

    $(".blue").on("click", function () {
            handleClick(blue);
    });

    $(".green").on("click", function () {
            gamerNumber = gamerNumber + green;
            $("#yourNumber-text").text("Your current number: " + gamerNumber);
            winOrLose();
    })

    $(".purple").on("click", function () {
            gamerNumber = gamerNumber + purple;
            $("#yourNumber-text").text("Your current number: " + gamerNumber);
            winOrLose();
    })

    $(".red").on("click", function () {
            gamerNumber = gamerNumber + red;
            $("#yourNumber-text").text("Your current number: " + gamerNumber);
            winOrLose();
    });
    chooseValues();
}); 