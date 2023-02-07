// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

function makeAllCaps(arrOfWords) {
  return new Promise((resolve, reject) => {
    if (arrOfWords.every((word) => typeof word === "string")) {
      resolve(arrOfWords.map((word) => word.toUpperCase()));
    } else {
      reject(new Error("NOT A STRING"));
    }
  });
}

function sortWords(arrOfWords) {
  return new Promise((resolve) => {
    resolve(arrOfWords.sort());
  });
}

const result1 = ["toni", "sean", "shay"];
const result2 = ["toni", 20, "shay"];

makeAllCaps(result1)
  .then(sortWords)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

makeAllCaps(result2)
  .then(sortWords)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));
