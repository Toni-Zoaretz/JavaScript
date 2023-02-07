// Create a button that will fetch the joke of the day.
// Display to the screen the joke title and the joke itself.
// Let's do a simple ajax call with fetch using this URL
// “https://api.jokes.one/jod”.
const text = document.getElementById("text");
const div = document.querySelector(".new-div");

text.addEventListener("click", gettext);

function gettext() {
  // console.log(res.json());
  fetch("https://api.jokes.one/jod")
    .then((res) => res.json())
    .then((data1) => data1.contents.jokes[0].joke)
    .then((data2) => (div.innerHTML = `${data2.title} <br> ${data2.text}`));
}
