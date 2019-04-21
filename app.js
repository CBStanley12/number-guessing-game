// Set game values as variables
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// Set UI element values as variables
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign the min and max values to UI elements
minNum.textContent = min;
maxNum.textContent = max;