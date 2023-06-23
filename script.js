let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Returns a random integer between 0 and 9 
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}


// Compares human guess, computer guess, and the secret target number to be guessed
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    humanDistance = Math.abs(humanGuess - targetNumber);
    computerDistance = Math.abs(computerGuess - targetNumber);

    if (humanDistance <= computerDistance) {
        return true;
    }
    else if (computerDistance < humanDistance) {
        return false;
    }
}


// Updates score based on which player won
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } 
    else if (winner === 'computer') {
        computerScore++;
    }
}


// Updates the round number after each round played
const advanceRound = () => {
    currentRoundNumber++;
}