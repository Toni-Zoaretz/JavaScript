const randomHero = Math.floor(Math.random() * 10) + 1;
const btn = document.getElementById("btn");
let arr = [];
async function herosDetails() {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${randomHero}`);
    const data = await response.json();
    const { name, height, hair_color, homeworld } = data;
    console.log(name, height, hair_color, homeworld);
    const response2 = await fetch(homeworld);
    const data2 = await response2.json();
    const { population } = data2;
    const namePlanet = data2.name;
    console.log(population, namePlanet);
    const objHero = {
      Name: name,
      Height: height,
      Hair: hair_color,
      Planet: {
        Name: namePlanet,
        Population: population,
      },
    };
    arr.push(objHero);
  } catch (error) {
    throw new Error("on no!!!");
  }
}

herosDetails();

// function to map over the array and creat element dinamicly
