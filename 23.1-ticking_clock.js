let hour = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let secondes = document.querySelector(".seconde");

const today = new Date();

let sec = today.getSeconds();
let min = today.getMinutes();
let hours = today.getHours();
let secId;

function seconde() {
  secId = setInterval(function () {
    sec++;
    secondes.innerText = sec;
    chectime();
  }, 1000);
}

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
