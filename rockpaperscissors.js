////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
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
if (move === "rock"|| move ==="paper" || move === "scissors" ) return move; 
else  {
	return getInput();}
};

var getComputerMove = function () {
	return randomPlay();
};

var playerMove = getInput();   
var computerMove = getComputerMove();

console.log("Player chose " + playerMove);
console.log("Computer chose " + computerMove);

var getWinner= function(playerMove,computerMove) {
  if (playerMove===computerMove){
     return  'tie';
    
  }
else if (playerMove === 'rock' && computerMove === 'scissors') {
   return  'player';
}
else if (playerMove === 'paper' && computerMove === 'scissors')
{ return 'computer';}
else if (playerMove === 'scissors' && computerMove === 'paper')
{ return  'player';}
else if (playerMove === 'scissors' && computerMove === 'rock')
{ return  'computer';}
else if (playerMove === 'rock' && computerMove ==='paper')
{ return 'computer';}
else if (playerMove === 'paper' && computerMove === 'rock')
{ return  'player';}
};

var winner = getWinner(playerMove, computerMove);

console.log("The winner is:");
console.log(winner);

function playToFive() {
     console.log("Let's play Rock, Paper, Scissors");
     var playerWins = 0;
     var computerWins = 0;
     
     while (playerWins < 5 && computerWins < 5) {
         var playerMove = getPlayerMove();
         var computerMove = getComputerMove();
         var winner = getWinner(playerMove, computerMove);
         console.log(new Date());
         if (winner === "player") {
             console.log("Player Wins" + "\n", "Player chose " + playerMove + " while Computer chose " + computerMove);
             playerWins += 1;
             console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
         } else if (winner === "computer") {
             console.log("Computer Wins" + "\n", "Player chose " + playerMove + " while Computer chose " + computerMove);
             computerWins += 1;
             console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
         } else {
             console.log("Result is a Tie");
             }
     }return [playerWins, computerWins];
 }
 playToFive(); 

