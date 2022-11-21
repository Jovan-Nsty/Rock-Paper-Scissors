// storage for either ‘Rock’, ‘Paper’ or ‘Scissors’
let computerChoice;
let playerChoice;

// score counters
let computerCount = 0;
let playerCount = 0;
let roundCounter = 0;

// determine computer choise’
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
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

// function that plays a single round of Rock Paper Scissors
function playRound(playerChoice, computerChoice) {

    // check for a tie
    if (playerChoice === computerChoice) {
        return `${moveInfo()} It\'s a tie!`;
    } else {
        roundCounter++;
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
}

function moveInfo() {
    return `You choose ${playerChoice}. Computer choose ${computerChoice}. `;
}

// function to play five rounds and to assign the values
function game() {
    getComputerChoice();

    let result = playRound(playerChoice, computerChoice);
    let round = `ROUND ${roundCounter}`;
    let score = `${playerCount} : ${computerCount}`;

    const displayRound = document.getElementById('round');
    const displayResult = document.getElementById('result');
    const displayScore = document.getElementById('score');
    const displayMessage = document.getElementById('message');

    displayMessage.innerHTML = '';
    displayRound.innerHTML = round;
    displayResult.innerHTML = result;
    displayScore.innerHTML = score;

    if (roundCounter === 5) {
        if (playerCount > computerCount) {
            displayMessage.innerHTML = 'VICTORY';
        } else if (playerCount < computerCount) {
            displayMessage.innerHTML = 'DEFEAT';
        }

        // reset
        roundCounter = 0;
        computerCount = 0;
        playerCount = 0;
    }
}