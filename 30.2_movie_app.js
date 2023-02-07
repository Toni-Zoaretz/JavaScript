const inputValue = document.querySelector(".input");
const btn = document.querySelector(".btn");
const moviePoster = document.querySelector(".img");
const movieTitle = document.querySelector(".movie-title");
const genre = document.querySelector(".genre");
const plot = document.querySelector(".plot");
const director = document.querySelector(".director");
const actors = document.querySelector(".actors");

// <!-- We want a user to type a movie name at the input and get
// the data displayed on the screen:
// 1. Movie poster
// 2. Movie title
// 3. Genre
// 5. Plot
// 6. Director
// 7. Actors -->

btn.addEventListener("click", function () {
  const movieInput = inputValue.value;
  if (!movieInput) {
    return;
  } else {
    getMovieData(movieInput);
  }
});

async function getMovieData(movieName) {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=d4450046`
    );
    const jsonData = await response.json();
    // console.log(response.json(), response);
    moviePoster.src = jsonData.Poster;
    movieTitle.textContent = jsonData.Title;
    genre.innerHTML = jsonData.Genre;
    plot.textContent = jsonData.Plot;
    jsonData.Ratings.map(function (el) {
      const rate = document.createElement("p");
      rate.textContent = `${el.Source} ${el.Value}`;
      document.body.appendChild(rate);
    });
  } catch (error) {
    throw new Error("ON NO!!!");
  }
}
