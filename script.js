/* function getPlayerChoice() {
    let answer = prompt("Rock, Paper or Scissors?").toLowerCase();
    return answer;
} */

function playRound(button){
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice(button);
    if (playerSelection == computerSelection ){
        alert("It's a tie!");
        return "Tie";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        alert("You Lose! Paper beats Rock");
        return "Defeat";
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        alert("You Win! Rock beats Scissors");
        return "Victory";
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        alert("You Win! Paper beats Rock");
        return "Victory";
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        alert("You Lose! Scissors beat Paper");
        return "Defeat";
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        alert("You Win! Scissors beat Paper");
        return "Victory";
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        alert("You Lose! Rock beats Scissors");
        return "Defeat";
    }
}

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

function getPlayerChoice(button) {
    if (button.target.textContent == 'Rock'){
        playerSelection = "rock";
    }else if (button.target.textContent == "Paper"){
        playerSelection = "paper";
    }else{
        playerSelection = "scissors";
    }
    return playerSelection;
}

const btns = document.querySelectorAll('button');
btns.forEach(button => {
    button.addEventListener('click', playRound);
})


/*   function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        outcome = playRound(playerSelection,computerSelection);
        switch (outcome){
            case "Tie":
                ++playerWins;
                ++computerWins;
                break;
            case "Defeat":
                ++computerWins;
                break;
            case "Victory":
                ++playerWins;
                break;
        }
    }
    if (playerWins > computerWins){
        alert("You won!");
    }else if (playerWins < computerWins) {
        alert("You lost!");
    }else {
        alert("It's a tie!");
    }
}

game()*/