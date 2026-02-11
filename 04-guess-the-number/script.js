let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.getElementById('guessField');
const submit = document.getElementById('subt');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuesses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter valid number');
  } else if (guess < 1) {
    alert('Please enter number greater than 1');
  } else if (guess > 100) {
    alert('Please enter number less than 100');
  } else if (prevGuesses.includes(guess)) {
    alert('You guessed this number before');
  } else {
    prevGuesses.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over!!! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Congratulations!!! You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOO low');
  } else {
    displayMessage('Number is TOO high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  numGuess++;
  remainingGuesses.innerHTML = `${11 - numGuess}`;
  guessSlot.innerHTML += `${guess}, `;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const button = document.getElementById('newGame');
  button.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
