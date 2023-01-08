// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places

function circleArea(x) {
  let result = Math.PI * x * x;
  return result;
}

console.log(circleArea(20));
console.log(circleArea(20).toFixed(2));
