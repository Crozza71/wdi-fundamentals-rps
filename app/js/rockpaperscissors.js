////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

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

function getPlayerMove(move) {
var move;
if (move === (“rock”|| “paper” || “scissors” )) {return move; }
else if (move != (“rock” || “paper” || “scissors”)) {return getInput();}
};


function getComputerMove(move) {
var move;
if (move === (“rock”|| “paper” || “scissors” )) {return move; }
else if (move != (“rock” || “paper” || “scissors”)) {return randomPlay();}
};

    
function getWinner(playerMove,computerMove) {
    var winner;
if (playerMove===computerMove){winner = “Tie”};
else if (playerMove === “rock” && computerMove === “scissors”)
{winner =“Player!”;}
else if (playerMove === “paper” && computerMove ===“ scissors”)
{winner =“Computer!”;}
else if (playerMove === “scissors” && computerMove === “paper”)
{winner = “Player!”;}
else if (playerMove === “scissors” && computerMove === “rock”)
{winner = “Computer!”;}
else if (playerMove === “rock” && computerMove ===“paper”)
{winner =“Computer!”;}
else if (playerMove === “paper” && computerMove === “rock”)
{winner = “Player!”;}
}
return winner;
}


 

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);

while (playerWins < 5 && computerWins < 5){
if (winner = “Player”) {console.log('Player Wins' + '\n', ''Player chose ' + playerMove + ' while Computer chose ' + computerMove);playerWins += 1;
console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
} else if (winner = “Computer”) {console.log('Computer Wins' + '\n', 'Player chose ' + playerMove + ' while Computer chose ' + computerMove);computerWins += 1;
console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
} else if (winner ="Tie"  {console.log (“Result is a tie!”)
}
   return [playerWins, computerWins];
}
