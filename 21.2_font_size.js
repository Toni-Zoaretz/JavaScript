// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

const text = document.querySelector(".text");

let stylesOfText = getComputedStyle(text).getPropertyValue("font-size");
currentSIze = parseFloat(stylesOfText);
console.log(currentSIze);
// console.log(stylesOfText);

const btnPlus = document.querySelector(".btn-1");
const btnMinus = document.querySelector(".btn-2");

let pxCounter = 20;

btnPlus.addEventListener("click", function () {
  if (pxCounter < 100) {
    pxCounter += 2;
    text.style.fontSize = pxCounter + "px";
  }
});

let pxCounter2 = 20;

btnMinus.addEventListener("click", function () {
  if (pxCounter > 16) {
    pxCounter--;
    text.style.fontSize = pxCounter + "px";
  }
});
