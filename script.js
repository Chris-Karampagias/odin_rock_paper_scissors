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

function playRound (playerSelection,computerSelection)
{
    if (playerSelection == computerSelection ){
        return "It's a tie!";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors";
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beat Paper"
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beat Paper";
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors";
    }
}
