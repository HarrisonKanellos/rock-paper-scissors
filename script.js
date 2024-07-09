function getComputerChoice() {
    let n = Math.random();
    if (n <= 0.33) {
        return "rock";
    }
    else if (n <= 0.66) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}
