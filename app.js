// storage for either ‘Rock’, ‘Paper’ or ‘Scissors’
let computerChoice = '';
let playerChoice = 'rock';

// function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
}

getComputerChoice();

// function that plays a single round of Rock Paper Scissors
function playRound(playerChoice, computerChoice) {

    // check for a tie
    if (playerChoice === computerChoice) {
        return 'It\'s a Tie!';
    }

    // check for rock
    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'You Won! Rock beats Scissors.';
        } else {
            return 'You Lost. Paper beats Rock.';
        }
    }

    // check for paper
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You Won! Paper beats Rock.';
        } else {
            return 'You Lost! Scissors beats Paper.';
        }
    }

    // check for scissors
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You Won! Scissors beats Paper.';
        } else {
            return 'You Lost! Rock beats Scissors';
        }
    }
}