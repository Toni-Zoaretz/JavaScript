// Create a webpage that has a checkbox. If the checkbox is
// checked, make a photo appear. If it is not, make it disappear
const check = document.querySelector("#checkbox");
const img = document.querySelector("#img");
img.style.display = "none";

console.log(check.checked);

check.addEventListener("click", function () {
  if (check.checked === true) {
    img.style.display = "flex";
  } else if (!check.checked === true) {
    img.style.display = "none";
  }
});
