function getComputerChoice() {
    let n = Math.random();
    console.log(n);
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

console.log(getComputerChoice());