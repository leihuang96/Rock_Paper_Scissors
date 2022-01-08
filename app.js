// set variables
let playerScoreCount = 0;
let computerScoreCount = 0;
let selections = ['Rock', 'Paper', 'Scissors'];
let resultMessage = '';
let computerGuess = '';

// get data from html
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const result = document.getElementById('result');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const computerChoice = document.getElementById('computerChoice');

// set rule for the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      resultMessage = 'You Lose! Paper beats Rock';
      computerScoreCount++;
    } else if (computerSelection === 'Scissors') {
      resultMessage = 'You Win! Rock beats Scissors';
      playerScoreCount++;
    } else {
      resultMessage = "It's a tie";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      resultMessage = 'You Lose! Scissors beats Paper';
      computerScoreCount++;
    } else if (computerSelection === 'Rock') {
      resultMessage = 'You Win! Paper beats Rock';
      playerScoreCount++;
    } else {
      resultMessage = "It's a tie";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      resultMessage = 'You Lose! Rock beats Scissors';
      computerScoreCount++;
    } else if (computerSelection === 'Paper') {
      resultMessage = 'You Win! Scissors beats Paper';
      playerScoreCount++;
    } else {
      resultMessage = "It's a tie";
    }
  }
}

// computer play the game by randomly returning either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  computerGuess = selections[Math.floor(Math.random() * selections.length)];
  return computerGuess;
}

// listen to user's click
rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));

// get user's selection and let the game run
function handleClick(playerSelection) {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  playerScore.textContent = `Score: ${playerScoreCount}`;
  computerScore.textContent = `Score: ${computerScoreCount}`;
  result.textContent = resultMessage;
  computerChoice.textContent = computerGuess;
}
