'use strict';

// NOTE: DOM selectors
const inputGuess = document.querySelector('.guess');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const body = document.querySelector('body');

const textElemCl = function (classname, message) {
  document.querySelector(classname).textContent = message;
};

// NOTE: secret number for a game
let secretNumber = Math.ceil(Math.random() * 20);

// NOTE: value for DOM score
let scoreVal = 20;
let highScoreVal = 0;

// NOTE: check button
check.addEventListener('click', function () {
  const guess = +inputGuess.value;

  if (scoreVal > 1) {
    if (!guess) {
      // STATE: Empty input
      textElemCl('.message', 'No number⛔');
    } else if (guess === secretNumber) {
      // STATE: WIN
      textElemCl('.message', 'Correct number! 🎉');
      textElemCl('.number', secretNumber);
      body.style.backgroundColor = '#60b347';
      number.style.width = '30rem';
      // NOTE: logic for high score
      if (scoreVal > highScoreVal) {
        highScoreVal = scoreVal;
        textElemCl('.highscore', highScoreVal);
      }
    } else if (guess !== secretNumber) {
      // STATE: Too high or too low
      textElemCl(
        '.message',
        guess > secretNumber ? 'Too high 📈' : 'Too low 📉'
      );
      scoreVal--;
      textElemCl('.score', scoreVal);
    }
  } else {
    // STATE: Lost the game
    textElemCl('.message', 'You lost the game 💥');
    textElemCl('.score', 0);
  }
});

// NOTE: again button
again.addEventListener('click', function () {
  secretNumber = Math.ceil(Math.random() * 20);
  scoreVal = 20;
  textElemCl('.number', '?');
  textElemCl('.score', scoreVal);
  textElemCl('.message', 'Start guessing...');
  inputGuess.value = '';
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
});
