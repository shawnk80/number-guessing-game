let myRandomNumber = Math.floor(Math.random() * 100);
console.log(myRandomNumber)

const checkGuess = () => {
  yourGuess = document.getElementById("input-guess").value;
  guessResult = document.getElementById("guess-result");
  previousGuesses = document.getElementById("previous-guess");

  if (!yourGuess || !guessResult || !previousGuesses)
    return;

  if (yourGuess > myRandomNumber) {
    guessResult.innerHTML = "Too High"
    guess = document.createElement("p")
    guess.innerHTML = yourGuess
    previousGuesses.appendChild(guess)
  }
  else if (yourGuess < myRandomNumber) {
    guessResult.innerHTML = "Too Low"
    guess = document.createElement("p")
    guess.innerHTML = yourGuess
    previousGuesses.appendChild(guess)
  }
  else {
    guessResult.innerHTML = "Right on!!"
  }

}