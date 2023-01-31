"use strict";

const playe1Race = document.getElementById("player1-race");
const player2Race = document.getElementById("player2-race");
let activePlayer = document.querySelector(".active"); //player1
// console.log(activePlayer);

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight" || e.key === "Right") {
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowLeft" || e.key === "Left") {
  }
});

function td() {
  let active = activePlayer;
  // let currentMove = "";
  // console.log(active);
  for (let i = 0, cell; (cell = playe1Race.cells[i]); i++) {
    console.log(cell);
    if (!cell.classList.contains("finish")) {
      active.classList.remove("active");
      // cell.classList.add("active");
      cell.classList.add("active");
    }

    // active = active.classList.remove("active");
    // active[i + 1].classList.add("active");
  }
  return active;
}

td();

// for (var i = 0, cell; (cell = playe2Race.cells[i]); i++) {
//   console.log(cell[i]);
// }
