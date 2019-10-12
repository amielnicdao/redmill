$(document).ready(function () {

        var compNumber = Math.floor(Math.random() * 101) + 19;
        var gamerNumber = 0;
        var wins = 0;
        var losses = 0;

        $("#computer-text").text("Match this number: " + compNumber);
        $("#yourNumber-text").text("Your current number: " + gamerNumber);
        $("#wins-text").text("Wins: " + wins);
        $("#losses-text").text("Losses: " + losses);

        var blue = Math.floor(Math.random() * 12) + 1;
        var green = Math.floor(Math.random() * 12) + 1;
        var purple = Math.floor(Math.random() * 12) + 1;
        var red = Math.floor(Math.random() * 12) + 1;

        function startGame() {
                compNumber = Math.floor(Math.random() * 101) + 19;
                $("#computer-text").text("Match this number: " + compNumber);
                blue = Math.floor(Math.random() * 12) + 1;
                green = Math.floor(Math.random() * 12) + 1;
                purple = Math.floor(Math.random() * 12) + 1;
                red = Math.floor(Math.random() * 12) + 1;
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

        $(".blue").on("click", function () {
                gamerNumber = gamerNumber + blue;
                $("#yourNumber-text").text("Your current number: " + gamerNumber);
                winOrLose();
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
}); 