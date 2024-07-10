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

function playGame() {
    // Score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function to play one round
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

    // Select variables used in for loop
    let humanSelect;
    let computerSelect;

    // For loop to play 5 rounds
    for (let i = 0; i < 5; i++) {

        // Get human and computer choice for round
        humanSelect = getHumanChoice();
        computerSelect = getComputerChoice();

        // Play a round
        playRound(humanSelect, computerSelect);
        
        console.log("---Round " + (i + 1) + " Scores--- ")
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore)
    }

    // Declare winner
    if (humanScore > computerScore) {
        console.log("You win Rock, Paper, Scissors!")
    }
    else {
        console.log("You lose the game :(")
    }
    console.log("---Here are the final scores---")
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore)
}