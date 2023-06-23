let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Returns a random integer between 0 and 9 
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());


// Compares human guess, computer guess, and the secret target number to be guessed
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    humanDistance = Math.abs(humanGuess - targetNumber);
    computerDistance = Math.abs(computerGuess - targetNumber);

    if (humanDistance < computerDistance) {
        console.log('human wins');
        return true;
    }
    else if (computerDistance < humanDistance) {
        console.log('computer wins');
        return false;
    }
    else {
        console.log('it is a tie!');
        return true;
    }
}

// computer wins
console.log(`4, 6, 8`);
console.log(compareGuesses(4, 6, 8));

// human wins
console.log(`4, 6, 2`);
console.log(compareGuesses(4, 6, 2));

// tie
console.log(`4, 6, 5`);
console.log(compareGuesses(4, 6, 5));