var computerScore = 0;
var playerScore = 0;
var result; 
var finalResult;
var counter=0;
function computerPlay(){
  var randomNum = Math.floor(Math.random()*3); 
  const computerSelection =["rock","paper","scissors"];
  return computerSelection[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection){
      result= "It is a tie! Computer also selected " + computerSelection;
    } else if ((computerSelection == "rock" && playerSelection == "scissors")
     || (computerSelection == "scissors" && playerSelection == "paper")
     || (computerSelection == "paper" && playerSelection == "rock")){
        result = "Computer Won! Computer selected " + computerSelection;
        computerScore++;
        document.getElementById('computerScore').textContent = computerScore;
      } else{
        result = "You Won! Computer selected " + computerSelection;
        playerScore++;
        document.getElementById('playerScore').textContent = playerScore;

      }
}
function restartGame(){
 computerScore = 0;
 document.getElementById('computerScore').textContent = computerScore;
 playerScore = 0;
 document.getElementById('playerScore').textContent = playerScore;
 document.getElementById('finalResult').textContent ='';
 result = ''; 
 document.getElementById('result').textContent ="";
 counter=0;
  document.getElementById('restartButton').style.visibility="hidden";
}


function game(){
    var buttons = document.querySelectorAll('button');
    for (j=0; j<3; j++){
      var button = buttons[j];
       
      button.addEventListener('click', function() {
        if(counter==5){
          if(playerScore==computerScore){
            finalResult= "It's a Tie"
          }else if(playerScore>computerScore){
            finalResult= "You WON!"
          }else{
            finalResult="You LOST!"
          }

          document.getElementById('finalResult').textContent = "Game END "+ finalResult;
          document.getElementById('restartButton').style.visibility="visible";
          return;
        }
        counter++;
        var playerSelection = this.id;
        var computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById('result').textContent = result;
        
        });     
}
}
document.addEventListener("DOMContentLoaded",game);
document.getElementById('restartButton').addEventListener('click',restartGame);
