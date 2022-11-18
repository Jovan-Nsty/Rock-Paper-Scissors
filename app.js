// storage for either ‘Rock’, ‘Paper’ or ‘Scissors’
let computerChoice;
let playerChoice;

// score counters
let computerCount = 0;
let playerCount = 0;
let roundCounter = 0;

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
        return `${moveInfo()} It\'s a tie!`;
    }

    // check for rock
    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            playerCount++;
            return `${moveInfo()} You Won! Rock beats Scissors.`;
        } else {
            computerCount++;
            return `${moveInfo()} You Lost. Paper beats Rock.`;
        }
    }

    // check for paper
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            playerCount++;
            return `${moveInfo()} You Won! Paper beats Rock.`;
        } else {
            computerCount++;
            return `${moveInfo()} You Lost! Scissors beats Paper.`;
        }
    }

    // check for scissors
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            playerCount++;
            return `${moveInfo()} You Won! Scissors beats Paper.`;
        } else {
            computerCount++;
            return `${moveInfo()} You Lost! Rock beats Scissors`;
        }
    }
}

// determine players choice
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', () => {
    playerChoice = 'rock';
    game();
});

paper.addEventListener('click', () => {
    playerChoice = 'paper';
    game();
});

scissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    game();
});

// function to play five rounds
function game() {
    roundCounter++;
    getComputerChoice();

    let result = playRound(playerChoice, computerChoice);
    let round = `ROUND ${roundCounter}`;
    let score = `${playerCount} : ${computerCount}`;

    const displayRound = document.getElementById('round');
    const displayResult = document.getElementById('result');
    const displayScore = document.getElementById('score');

    if (roundCounter === 5) {
        round = 'FINAL ROUND';
        const message = document.getElementById('message');
        if (playerCount > computerCount) {
            message.innerHTML = 'VICTORY';
        } else if (playerCount < computerCount) {
            message.innerHTML = 'YOU LOSE';
        } else {
            message.innerHTML = 'IT\'S A TIE';
        }

        roundCounter = 0;
        computerCount = 0;
        playerCount = 0;
        message.removeAttribute('#message');
    }

    displayRound.innerHTML = round;
    displayResult.innerHTML = result;
    displayScore.innerHTML = score;
}

function moveInfo() {
    return `You choose ${playerChoice}. Computer choose ${computerChoice}. `;
}