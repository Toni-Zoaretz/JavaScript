const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function areTheSame(arr, arr1) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr[i] !== arr1[j]) {
        continue;
      }
      result.push(arr[i]);
    }
  }
  if (result.length > 0) {
    return result;
  }
  return false;
}

console.log(areTheSame(food, food1));
