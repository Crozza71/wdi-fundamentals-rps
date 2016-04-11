////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var getPlayerMove = function(move) {
    if (move === ("rock" || "paper" || "scissors")) return move;
    else {
        return getInput();
    }
};
var getComputerMove = function(move) {
    if (move === ("rock" || "paper" || "scissors")) return move;
    else {
        return randomPlay();
    }
};

function getWinner(playerMove, computerMove) {
	var winner;
    if (playerMove === computerMove) {
        return "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        return "player";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        return "computer";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        return "player";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        return "computer";
    } else if (playerMove === "rock" && computerMove === "paper") {
        return "computer";
    } else if (playerMove === "paper" && computerMove === "rock") {
        return "player";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            console.log("Player Wins" + "\n", "Player chose " + playerMove + " while Computer chose " + computerMove);
            playerWins += 1;
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        } else if (winner === "computer"); {
            console.log("Computer Wins" + "\n", "Player chose " + playerMove + " while Computer chose " + computerMove);
            computerWins += 1;
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        return [playerWins, computerWins];
        }
    }
}
playToFive();