// Create a webpage that has a form (asks the user for its name,
//   age, and email address) and when the user clicks submit, open
//   a text window that writes all the information and asks for his
//   confirmation. If he clicks on the confirm button, tell him
//   “congratulations you successfully sent this form” if he clicks on
//   change information, give him the possibility to change the
//   information, and ask again for his confirmation
const fullName = document.querySelector("#full-name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const btnSumbit = document.querySelector("#btn");
const form = document.querySelector("#sign-up");
const list = document.querySelector(".all");
const correct = document.querySelector(".true");
const notCorrect = document.querySelector(".false");
const divText = document.querySelector(".text-box");

btnSumbit.addEventListener("click", function (e) {
  const li1 = document.createElement("li");
  li1.textContent = fullName.value;
  li1.classList.add("li");
  list.appendChild(li1);
  const li2 = document.createElement("li");
  li2.textContent = age.value;
  li2.classList.add("li");
  list.appendChild(li2);
  const li3 = document.createElement("li");
  li3.textContent = email.value;
  li3.classList.add("li");
  list.appendChild(li3);
  divText.style.visibility = "visible";

  e.preventDefault();
});

correct.addEventListener("click", function () {
  alert("congratulation!");
});

notCorrect.addEventListener("click", function () {
  divText.style.visibility = "hidden";
  li1.classList.remove("li");
  li2.classList.remove("li");
  li3.classList.remove("li");
});
