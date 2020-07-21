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
    // guessInput.style.borderColor = "red";
  }
  if (guess === winningNum) {
    //Disable the input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = "green";
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN`, "green");
  } else {
  }
});

//Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
