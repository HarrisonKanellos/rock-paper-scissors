// Global variables
let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let cChoice = Math.random();
    if (cChoice <= 0.33) {
        return "rock";
    }
    else if (cChoice <= 0.66) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let hChoice;
    do {
        hChoice = prompt("rock, paper, scissors").toLowerCase();
    }
    while (hChoice != "rock" && hChoice != "paper" && hChoice != "scissors")
    return hChoice;
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                roundResult.textContent = "You lose! Paper wraps up the rock.";
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                roundResult.textContent = "You win! Rock crushes scissors.";
                humanScore++;
            }
            else {
                roundResult.textContent = "It's a draw! You both chose rock.";
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                roundResult.textContent = "You win! Paper wraps up the rock.";
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                roundResult.textContent = "You lose! Scissors cuts paper.";
                computerScore++;
            }
            else {
                roundResult.textContent = "It's a draw! You both chose paper.";
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                roundResult.textContent = "You lose! Rock crushes scissors.";
                computerScore++;
            }
            else if (computerChoice == "paper") {
                roundResult.textContent = "You win! Scissors cuts paper.";
                humanScore++;
            }
            else {
                roundResult.textContent = "It's a draw! You both chose scissors.";
            }
            break;
    }
    trackGame();
}

function trackGame() {
    round++;
    if (humanScore == 5 || computerScore == 5) {
        scoresDiv.removeChild(currentRound);
        let finalResult = document.createElement("h2");
        scoresDiv.insertBefore(finalResult, displayHuman)

        if (humanScore > computerScore) {
            finalResult.textContent = "You Won the Game!! Final Scores: ";
        }
        else {
            finalResult.textContent = "You Lost the Game :/ Final Scores: ";
        }
    }
    currentRound.textContent = `Round ${round} Score`;
    displayHuman.textContent = `Human Score: ${humanScore}`;
    displayComputer.textContent = `Computer Score: ${computerScore}`;
}

// Selection buttons
let rockBtn = document.querySelector("#rock-button");
let paperBtn = document.querySelector("#paper-button");
let scissorsBtn = document.querySelector("#scissors-button");

let rockVal = document.querySelector("#rock-button").value;
let paperVal = document.querySelector("#paper-button").value;
let scissorsVal = document.querySelector("#scissors-button").value;

rockBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), rockVal);
})
paperBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), paperVal);
})
scissorsBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), scissorsVal);
})

// Results display
let scoresDiv = document.querySelector("#scores-container");

let roundResult = document.createElement("p");
let currentRound = document.createElement("h2");
let displayHuman = document.createElement("p");
let displayComputer = document.createElement("p");

scoresDiv.appendChild(roundResult);
scoresDiv.appendChild(currentRound);
scoresDiv.appendChild(displayHuman);
scoresDiv.appendChild(displayComputer);