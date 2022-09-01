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
    if (button.target.getAttribute("id") == 'rock'){
        playerSelection = "rock";
    }else if (button.target.getAttribute("id") == "paper"){
        playerSelection = "paper";
    }else{
        playerSelection = "scissors";
    }
    return playerSelection;
}

function playRound(playerSelection,computerSelection){  
    if (playerSelection == computerSelection ){
        message.textContent = "It's a tie!";
        return "Tie";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        message.textContent = "You Lose! Paper beats Rock";
        return "Defeat";
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        message.textContent = "You Win! Rock beats Scissors";
        return "Victory";
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        message.textContent = "You Win! Paper beats Rock";
        return "Victory";
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        message.textContent = "You Lose! Scissors beat Paper";
        return "Defeat";
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        message.textContent = "You Win! Scissors beat Paper";
        return "Victory";
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        message.textContent = "You Lose! Rock beats Scissors";
        return "Defeat";
    }
}   

    
function initializeGame(){
    let i = 1;
    let playerWins = 0;
    let computerWins = 0;
    const btns = document.querySelectorAll('button');
    const message = document.querySelector("#message");
    const playerScore = document.querySelector("#player-score")
    const computerScore = document.querySelector("#computer-score");
    const result = document.querySelector("#result");

    btns.forEach(button =>{ 
        button.addEventListener('click',function game(e) {
            playerSelection = getPlayerChoice(e);
            computerSelection = getComputerChoice();
            outcome = playRound(playerSelection,computerSelection);
            switch (outcome) {
                case "Tie":
                    playerWins++;
                    computerWins++;
                    playerScore.textContent = `Player Score : ${playerWins}`;
                    computerScore.textContent = `Computer Score : ${computerWins}`;
                    break;
                case "Victory":
                    playerWins++;
                    playerScore.textContent = `Player Score : ${playerWins}`;
                    computerScore.textContent = `Computer Score : ${computerWins}`;
                    break;
                case "Defeat":
                    computerWins++;
                    playerScore.textContent = `Player Score : ${playerWins}`;
                    computerScore.textContent = `Computer Score : ${computerWins}`;
                    break;
            }
            i++

            if (i == 6){
                if (playerWins < computerWins){
                    result.textContent = "You lose!";
                    button.removeEventListener("click",game);
                }else if (playerWins > computerWins){
                    result.textContent = "You win!";
                    button.removeEventListener("click",game);
                }else {
                    result.textContent = "Tie!";
                    button.removeEventListener("click",game);
                }
            }

        })})
    
    
}  

initializeGame();

