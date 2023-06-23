let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Returns a random integer between 0 and 9 
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// console.log(generateTarget());


// Compares human guess, computer guess, and the secret target number to be guessed
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    humanDistance = Math.abs(humanGuess - targetNumber);
    computerDistance = Math.abs(computerGuess - targetNumber);

    if (humanDistance <= computerDistance) {
        console.log('human wins');
        return true;
    }
    else if (computerDistance < humanDistance) {
        console.log('computer wins');
        return false;
    }
}

// computer wins
// console.log(`4, 6, 8`);
// console.log(compareGuesses(4, 6, 8));

// human wins
// console.log(`4, 6, 2`);
// console.log(compareGuesses(4, 6, 2));

// tie, but human wins
// console.log(`4, 6, 5`);
// console.log(compareGuesses(4, 6, 5));


// Updates score based on which player won
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
        console.log('human score increased');
    } 
    else if (winner === 'computer') {
        computerScore++;
        console.log('computer score increased');
    }
}

// pass in human
console.log(updateScore('human'));
// pass in computer
console.log(updateScore('computer'));