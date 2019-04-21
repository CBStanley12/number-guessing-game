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

// Determine the final state of the game
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable the number input
    guessInput.disabled = true;
    // Change the border color of the input
    guessInput.getElementsByClassName.borderColor = color;
    // Display message to the user
    setMessage(msg, color);

    // Prompt the user to play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Generate a random number as the winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Display a message to the user based on the game's outcome
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}