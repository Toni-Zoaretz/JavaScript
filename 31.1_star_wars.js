const btn = document.getElementById("btn");

let herosArray = [];

//add random hero function
function addRandomhero() {
  const randomHero = Math.floor(Math.random() * 10) + 1;
  herosDetails(randomHero);
}

// main function that happens on button click
function onButtonClick() {
  btn.addEventListener("click", function () {
    for (let i = 0; i < 10; i++) {
      addRandomhero();
    }
  });
}

async function herosDetails() {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/${addRandomher}`
    );
    const data = await response.json();
    const { name, height, hair_color, homeworld } = data;
    const response2 = await fetch(homeworld);
    const data2 = await response2.json();
    const { population } = data2;
    const namePlanet = data2.name;
    const objHero = {
      Name: name,
      Height: height,
      Hair: hair_color,
      Planet: {
        Name: namePlanet,
        Population: population,
      },
    };
    herosArray.push(objHero);
  } catch (error) {
    throw new Error("on no!!!");
  }
}

console.log(herosArray);

// function to map over the array and creat element dinamicly
