const textArea = document.querySelector("#number");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const value = Number(textArea.value);
  if (value === 1) {
    const img = document.createElement("img");
    img.src = "/smiley-g5d7130aff_1280.jpg";
    img.prepend("btn");
  } else {
    btn.innerText = "this is not a number";
  }
});
