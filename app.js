// Game Function:
// Player must guess a number between a min and a max
// Player gets a certain amount of guesses
// Notify player of guesses remaining
// Notify the player of the correct answer if loose
// Let player choose to play again

//Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UT elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener("click", function (e) {
  let guess = parseInt(guessInput.value);
  //CONSOLE E BLACK COLOR E ASHLE THAT IS BASICALLY A STRING
  console.log(guess);
  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    //if guess ===NaN doesnt work
    setMessage(`Please Enter a number between ${min} & ${max}`, "red");
  }
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WON!!`);
    //backticks can also be sent as a parameter
  } else {
    //Wrong number
    guessesLeft -= 1; //guessesLeft=guessesLeft-1
    if (guessesLeft === 0) {
      //Game Over - lost
      gameOver(
        //a really optimized function
        false,
        `Game Over, YOU LOSTTT SUCKER, the correct number was ${winningNum}`,
      );
    } else {
      // Game continues but answer wrong
      //change the border color
      guessInput.style.borderColor = "red";

      //Clear
      guessInput.value = "";

      //tell user its the wrong number
      setMessage(`${guess} aint correct, ${guessesLeft} guess left`);
    }
  }
});
//GameOver
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //Disable input
  guessInput.disabled = true; //not won's TRUE value
  // change border color
  guessInput.style.borderColor = color;
  message.style.color = color;
  // Set message
  setMessage(msg);
}
//Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
