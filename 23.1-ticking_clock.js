let hour = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let secondes = document.querySelector(".seconde");

const today = new Date();

let sec = today.getSeconds();
let min = today.getMinutes();
let hours = today.getHours();
let secId;

// today.getSeconds();
// today.getHours();
// today.getMinutes();

function seconde() {
  secId = setInterval(function () {
    sec++;
    secondes.innerText = sec;
    chectime();
  }, 1000);
}

// .getHours()
// .getSeconds()
// .getMinutes()

console.log(seconde());

function chectime() {
  if (sec === 60) {
    min++;
    sec = 0;
    minutes.textContent = min;
  }
  if (min === 60) {
    hours++;
    min = 0;
    hour.textContent = hours;
  }
}

// let mins = 0;
// let minId;

// function min() {
//   minId = setInterval(function () {
//     mins++;
//     minutes.innerText = mins;
//   }, 2000);
// }

// console.log(min());

// let hour1 = 0;
// let hourId;

// function hores() {
//   hourId = setInterval(function () {
//     hour1++;
//     hour.innerText = hour1;
//   }, 3000);
// }

// console.log(hores());
