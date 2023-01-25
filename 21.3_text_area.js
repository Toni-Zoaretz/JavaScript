// Create a webpage that has part of the application
// process for a job. This page should have a text area
// field and a button. Your user must enter at least 100
// characters before clicking the button. If he didn’t, please
// give him the appropriate message. (using alert is
// forbidden)

const textArea = document.querySelector("#message");
console.log(textArea);
const btn = document.querySelector(".btn");
console.log(btn);
const counter = document.querySelector(".counter");

btn.addEventListener("mouseover", function () {
  const value = textArea.value.length;
  if (value < 100) {
    btn.innerText = "This is not enght";
  } else if (value >= 100) {
    btn.innerText = "super cool";
  }
});
