const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const body1 = document.querySelector("body");
const orderList = document.createElement("ul");
body1.appendChild(orderList);

users.forEach(function (el) {
  const allNames = el.firstName + " " + el.lastName;
  console.log(allNames);
  const oreder = document.createElement("li");
  orderList.appendChild(oreder);
  oreder.innerText = allNames;
  oreder.setAttribute("data-id", el.id);
});

orderList.style.listStyle = "none";
