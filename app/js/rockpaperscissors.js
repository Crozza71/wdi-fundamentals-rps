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

var getPlayerMove= function(move) {
if (move === ('rock'|| 'paper' || 'scissors' )) return move; 
else {
 return getInput();}
};

var getComputerMove= function(move) {
if (move === (‘rock’|| ‘paper’ || ‘scissors’ )) return move; 
else {
 return randomPlay();}
};

getInput();
    
var getWinner= function(playerMove,computerMove) {
if (playerMove===computerMove){winner = ‘tie’};
else if (playerMove === ‘rock’ && computerMove === ‘scissors’)
{winner =‘player’;}
else if (playerMove === ‘paper’ && computerMove === ‘scissors’)
{winner =‘computer’;}
else if (playerMove === ‘scissors’ && computerMove === ‘paper’)
{winner = ‘player’;}
else if (playerMove === ‘scissors’ && computerMove === ‘rock’)
{winner = ‘computer’;}
else if (playerMove === ‘rock’ && computerMove ===‘paper’)
{winner =‘computer’;}
else if (playerMove === ‘paper’ && computerMove === ‘rock’)
{winner = ‘player’;}
}
}

getWinner();
 

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

platToFive();
