// storage for either ‘Rock’, ‘Paper’ or ‘Scissors’
let computerChoice = '';

// function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    } else if (randomNumber === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
}