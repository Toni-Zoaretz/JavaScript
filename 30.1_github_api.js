const inputValue = document.getElementById("input");
const btn = document.getElementById("btn");
const img = document.querySelector(".img");
const name = document.querySelector("h1");
const reposNumber = document.querySelector("h2");

// https://api.github.com/users/{username}

// avatr Image
// name of user
// number of publick repos

btn.addEventListener("click", function () {
  const name = inputValue.value;
  if (!name) {
    return;
  } else {
    getData(name);
  }
});

async function getData(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok === false) {
    return;
  }
  await response.json().then((data) => {
    console.log(data);
    img.src = data.avatar_url;
    name.textContent = data.name;
    reposNumber.textContent = `Repos: ${data.public_repos}`;
  });
}
