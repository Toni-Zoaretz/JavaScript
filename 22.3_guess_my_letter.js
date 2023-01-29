const letter = document.querySelector("#letter");
const input = document.querySelector("#guess");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const guessAkey = document.querySelector(".guess-a-key");
const playAgain = document.querySelector(".play");
const usedLetterP = document.querySelector("p");
playAgain.style.display = "none";
let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomCharacter);

function isLetter(str) {
  let letterRegex = /[A-Z-a-z]/i;
  console.log({ str });
  return str.length === 1 && letterRegex.test(str.toString());
}

let usedLetters = {};
function isDubelLetter(letter) {
  if (usedLetters[letter]) {
    return true;
  } else {
    usedLetters[letter] = true;
    return false;
  }
}

input.addEventListener("keyup", function (e) {
  if (isLetter(e.target.value)) {
    if (input.value === randomCharacter) {
      guessAkey.textContent = "bravo!";
      playAgain.style.display = "flex";
      letter.textContent = randomCharacter;
    } else {
      if (isDubelLetter(e.target.value.toLowerCase())) {
        guessAkey.textContent = "you tap double letter!!";
      } else {
        guessAkey.textContent = "wrong guess!";
        usedLetterP.textContent += e.target.value.toLowerCase();
        usedLetterP.textContent += "," + " ";
      }
    }
  } else {
    guessAkey.textContent = "this is not a letter!";
  }
  input.value = "";
});

playAgain.addEventListener("click", function () {
  randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  letter.textContent = randomCharacter;
  console.log(randomCharacter);
  playAgain.style.display = "none";
  input.value = "";
  guessAkey.textContent = "Guess the word!";
  letter.textContent = "?";
});

// window.addEventListener;
