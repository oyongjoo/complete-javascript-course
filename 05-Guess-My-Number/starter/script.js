'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayCotent = function (element, message) {
  document.querySelector(`${element}`).textContent = message;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const resetElements = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = ''; // change width of class number
  // document.querySelector('.highscore').textContent = '0';
  score = 20;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('😳 No number!');
    // document.querySelector('.message').textContent = '😳 No number!';

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // change background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; // change width of class number

    if (score > highscore) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
      highscore = score;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too hgih' : '📉 Too low');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too hgih' : '📉 Too low';
      score--;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
    }
  }
  // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📈 Too hgih';
  //     score--;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //   }
  // }
  // document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; // change width of class number
  // document.querySelector('.highscore').textContent = '0';
});
