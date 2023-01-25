const btn = document.querySelector(".btn-1");
// console.log(input);

btn.addEventListener("click", function () {
  const input = Number(document.querySelector(".input-box").value);
  if (input < 18) {
    alert("you cannot drink😈");
  } else {
    alert("you are allowed to drink💜");
  }
});
