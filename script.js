//global variables
let humanScore = 0;
let computerScore = 0;

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
                console.log("You lose! Paper wraps up the rock.");
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                console.log("You win! Rock crushes scissors.");
                humanScore++;
            }
            else {
                console.log("It's a draw! You both chose rock.");
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                console.log("You win! Paper wraps up the rock.");
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                console.log("You lose! Scissors cuts paper.");
                computerScore++;
            }
            else {
                console.log("It's a draw! You both chose paper.");
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose! Rock crushes scissors.");
                computerScore++;
            }
            else if (computerChoice == "paper") {
                console.log("You win! Scissors cuts paper.");
                humanScore++;
            }
            else {
                console.log("It's a draw! You both chose scissors.");
            }
            break;
    }
}

let humanSelect = getHumanChoice();
let computerSelect = getComputerChoice();

console.log(humanSelect);
console.log(computerSelect);

playRound(humanSelect, computerSelect);