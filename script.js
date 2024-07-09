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
        hChoice = prompt("rock, paper, scissors");
    }
    while (hChoice != "rock" && hChoice != "paper" && hChoice != "scissors")
    return hChoice;
}

