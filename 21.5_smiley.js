const textArea = document.querySelector("#number");
const btn = document.querySelector(".btn");
const contanier = document.querySelector("#conatnier");

btn.addEventListener("click", function () {
  const value = Number(textArea.value);
  if (value) {
    const img = document.createElement("img");
    img.src = "/smiley-g5d7130aff_1280.jpg";
    contanier.appendChild(img);
  } else {
    btn.innerText = "this is not a number";
  }
});
