"use strict";

const playe1Race = document.getElementById("player1-race");
const player2Race = document.getElementById("player2-race");
let activePlayer = document.querySelector(".active");
console.log(activePlayer);

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight" || e.key === "Right") {
    console.log("this is right!!");
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowLeft" || e.key === "Left") {
    console.log("this is left");
  }
});

// console.log(playe1Race);

function td() {
  let active = activePlayer;
  for (let i = 0, cell; (cell = playe1Race.cells[i]); i++) {
    console.log(cell);
    // cell.classList.remove(".active");
    // cell.classList.add(".active");
  }
}

td();

// for (var i = 0, cell; (cell = playe2Race.cells[i]); i++) {
//   console.log(cell[i]);
// }
