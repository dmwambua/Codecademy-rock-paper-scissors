//Get the user’s choice.

const getUsersChoice = (userInput) => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log(`${userInput} is an invalid entry! Valid entries include "rock", "paper" or "scissors"  `)
        return null; // Return null for invalid entries.
    }
};

// Assign a value to userInput.
let userInput = 'paper';
let userChoice = getUsersChoice(userInput); // Validate and get user's choice

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissors';
    }
};

//Compare the two choices and determine a winner.

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Game was a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'the computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else if (computerChoice === 'rock') {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else if (computerChoice === 'paper') {
            return 'You won!';
        }
    }
};

//Start the program and display the results
if (userChoice !==null) {
    //only proceed if user input is valid
    const computerChoice = getComputerChoice(); // this assigns computers choice
    console.log(`Your input is: ${userChoice}`);
    console.log(`The computer's input is: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}