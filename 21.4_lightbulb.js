let onImg = document.querySelector(".off");
let turned = false;
onImg.addEventListener("click", function () {
  if (turned === false) {
    this.src = "/light-bulb-on_1920.jpg";
    turned = true;
  } else {
    this.src = "/light-bulb-off_1920.png";
    turned = false;
  }
});
