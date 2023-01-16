const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// function getNames(data) {
//   const nameResult = data.map(function (x) {
//     return x.name;
//   });
//   return nameResult;
// }

// console.log(getNames(data));

// function years(moshe) {
//   let result = [];
//   moshe.forEach(function (x) {
//     if (Number(x.birthday.slice(5)) <= 1990) {
//       result.push(x);
//     }
//   });
//   return result;
// }

// console.log(years(data));
// favoriteFoods
function food(obj) {
  let foorResult = [];
  obj.forEach(function (isItFood) {
    foorResult.push(isItFood.favoriteFoods.fish, isItFood.favoriteFoods.meats);
  });
  return foorResult;
}

console.log(food(data));
