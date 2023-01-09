/*The world population is 7900 million people. Create
a function declaration called 'percentageOfWorld1'
which receives a 'population' value, and returns the
percentage of the world population that the given
population represents. For example, China has
1441 million people, so it's about 18.2% of the world
population.*/

//Answer 1:
function percentageOfWorld1(population) {
  let result = (population / 7900) * 100;
  return result.toFixed(2);
}

console.log(percentageOfWorld1(1441));

const israel = percentageOfWorld1(9000);
console.log(israel);

const russia = percentageOfWorld1(1300);
console.log(russia);

const usa = percentageOfWorld1(1200);
console.log(usa);

//Amswer 2:
const percentageOfWorld2 = function (population) {
  let result = (population / 7900) * 100;
  return result.toFixed(2);
};

const israel1 = percentageOfWorld2(9000);
console.log(israel);

const russia1 = percentageOfWorld2(1300);
console.log(russia);

const usa1 = percentageOfWorld2(1200);
console.log(usa);
