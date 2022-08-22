function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound (getPlayerChoice = () => {
   let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase;
   return playerSelection; 
},
computerSelection = getComputerChoice()
){
    if (playerSelection == computerSelection ){
        return "It's a tie!";
    }else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "You Lose! Paper beats Rock";
    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors";
    }else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You Win! Paper beats Rock";
    }else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You Lose! Scissors beat Paper"
    }
}