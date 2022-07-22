// storage for either ‘Rock’, ‘Paper’ or ‘Scissors’
let computerChoice;
let playerChoice;

// score counters
let computerCount = 0;
let playerCount = 0;

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

// function that plays a single round of Rock Paper Scissors
function playRound(playerChoice, computerChoice) {

    // check for a tie
    if (playerChoice === computerChoice) {
        return 'It\'s a Tie!';
    }

    // check for rock
    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            playerCount++;
            return 'You Won! Rock beats Scissors.';
        } else {
            computerCount++;
            return 'You Lost. Paper beats Rock.';
        }
    }

    // check for paper
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            playerCount++;
            return 'You Won! Paper beats Rock.';
        } else {
            computerCount++;
            return 'You Lost! Scissors beats Paper.';
        }
    }

    // check for scissors
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            playerCount++;
            return 'You Won! Scissors beats Paper.';
        } else {
            computerCount++;
            return 'You Lost! Rock beats Scissors';
        }
    }
}

// function to play five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Rock Paper Scissors?').toLowerCase();
        getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }

    console.log('FINAL SCORE:');
    if (playerCount > computerCount) {
        console.log(`You Won! Your score is ${playerCount} : ${computerCount}`);
    } else if (playerCount < computerCount) {
        console.log(`You Lost! Your score is ${playerCount} : ${computerCount}`);
    } else {
        console.log('By Jolly! It\`s a tie!');
    }


}

game();