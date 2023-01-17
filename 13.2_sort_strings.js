const food = ["afalafel", "dsabich", "bhummus", "cpizza with extra pineapple"];
const food3 = ["afalafel", "dsabich", "bhummus", "cpizza with extra pineapple"];

const foods2 = food.sort();
console.log(food);

const food4 = food3.sort().reverse();
console.log(food3);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const foodsWithUpperCase1 = foodsWithUpperCase.sort();
console.log(foodsWithUpperCase1);

foodsWithUpperCase.sort((a, b) => {
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
});

console.log(foodsWithUpperCase);

foodsWithUpperCase.sort((a, b) => {
  if (b.toLowerCase() > a.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
});

console.log(foodsWithUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

function counter(words1) {
  let count = [];
  words1.forEach(function (a) {
    count.push(a.length);
  });
  return count;
}

console.log(counter(words));

console.log(counter);
const wordsSort = words.sort();

console.log(words);

const wordsAcenToDec = words.sort((a, b) => b.length - a.length);
console.log(wordsAcenToDec);
