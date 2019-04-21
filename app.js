// Set game values as variables
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
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

// Play again event listener
game.addEventListener('mousedown', function(e){
    // Force reload the page when the user clicks the button to play again
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for the user to submit a guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Determine if the user's guess is valid
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check to determine if the user has won the game
    if(guess === winningNum){
        // If the user has guessed correctly, display a winning message and end the game
        gameOver(true, `${winningNum} is correct. You Win!`);
    } else {
        // If the user has not guessed correctly, deduct one guess from the total
        guessesLeft -= 1;

        // If the user does not have any guesses left, end the game and display a losing message. Else, prompt the user to guess again
        if(guessesLeft === 0){
            gameOver(false, `Game Over. The correct number was ${winningNum}`);
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct. Guess again. You have ${guessesLeft} guesses left.`, 'red');
        }
    }
});

// Determine the final state of the game
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable the number input
    guessInput.disabled = true;
    // Change the border color of the input
    guessInput.style.borderColor = color;
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