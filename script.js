let i = 0;
let playerWins;
let computerWins;
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".grow");
const choiceContainer = document.querySelector(".computerChoice");
const resultContainer = document.querySelector(".resultContainer");
const roundResult = document.querySelector("#roundResult");
buttons.forEach(button => button.addEventListener("click",playGame));


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
    if (button.target.classList.contains("rock") == true){
        playerSelection = "rock";
    }else if (button.target.classList.contains("paper") == true){
        playerSelection = "paper";
    }else{
        playerSelection = "scissors";
    }
    return playerSelection;
}

function playRound(playerSelection,computerSelection){  
    if (playerSelection == computerSelection ){
        roundResult.textContent = "Tie!";
        return "Tie";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        roundResult.textContent = "You Lose!";
        return "Defeat";
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        roundResult.textContent = "You Win!";
        return "Victory";
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        roundResult.textContent = "You Win!";
        return "Victory";
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        roundResult.textContent = "You Lose!";
        return "Defeat";
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        roundResult.textContent = "You Win!";
        return "Victory";
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        roundResult.textContent = "You Lose!";
        return "Defeat";
    }
}   

function addPoints(outcome){
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
}
function initializeGame(){
    i = 1;
    playerWins = 0;
    computerWins = 0;
}

function nextRound() {
    i++;
}

function restartGame() {
    location.reload();
}

function waitForRestart(){
    const confirmation = document.createElement("button");
    confirmation.setAttribute("id","confirmation");
    confirmation.classList.add("grow");
    confirmation.textContent = "Click to restart";
    resultContainer.appendChild(confirmation);
    confirmation.addEventListener("click",restartGame);
}

function announceResult(){
if (playerWins < computerWins){
    result.textContent = "You lose!";
}else if (playerWins > computerWins){
    result.textContent = "You win!";
}else {
    result.textContent = "Tie!";
    }
}

function playGame(e) {
    if (i == 0) {initializeGame()};
    if (i > 1) {hideComputerChoice()};
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice(e);
    showComputerChoice(computerSelection);
    outcome = playRound(playerSelection,computerSelection);
    addPoints(outcome);
    if (i == 5) {
        announceResult();
        buttons.forEach(button => button.removeEventListener("click",playGame));
        waitForRestart();
    };
    nextRound();
}

function showComputerChoice(computerSelection) {
    choiceImage = document.createElement("img");
    choiceImage.setAttribute("id","choiceImage");
    if (computerSelection == "rock"){
        choiceImage.setAttribute("src","images/rock.webp");
        choiceContainer.appendChild(choiceImage);
    }else if (computerSelection == "paper"){
        choiceImage.setAttribute("src","images/old-scroll-paper_108964-329.webp");
        choiceContainer.appendChild(choiceImage);
    }else {
        choiceImage.setAttribute("src","images/istockphoto-1329468293-170667a.jpg");
        choiceContainer.appendChild(choiceImage);
    }
}

function hideComputerChoice(){
    choiceImage = document.querySelector("#choiceImage");
    choiceContainer.removeChild(choiceImage);
}
