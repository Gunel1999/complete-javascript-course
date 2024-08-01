'use strict';

// document.querySelector('.message').textContent = 'Correct number! 🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = 'No number⛔';
  }
});
