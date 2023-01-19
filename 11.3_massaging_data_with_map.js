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

function getonlyName(arr) {
  // let arrName = [];
  const arrName = arr.map(function (x) {
    return x.name;
  });
  return arrName;
}

console.log(getonlyName(data));

function bornBefor1990(arr) {
  const result = arr.filter(function (x) {
    let birthYear = Number(x.birthday.slice(-4));
    if (birthYear < 1990) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}

console.log(bornBefor1990(data));

function countFood(arr) {
  const allTheFood = {};
  data.forEach(function (person) {
    let meats = person.favoriteFoods.meats;
    let fisheArr = person.favoriteFoods.fish;

    meats.forEach(function (meat) {
      if (allTheFood[meat]) {
        allTheFood[meat] = allTheFood[meat] + 1;
      } else {
        allTheFood[meat] = 1;
      }
    });

    fisheArr.forEach(function (fish) {
      if (allTheFood[fish]) {
        allTheFood[fish] = allTheFood[fish] + 1;
      } else {
        allTheFood[fish] = 1;
      }
    });
  });

  return allTheFood;
}

console.log(countFood(data));

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

// function food(obj) {
//   let foorResult = [];
//   const obj1 = obj.map(function (isItFood) {
//     foorResult.push(isItFood.favoriteFoods.fish, isItFood.favoriteFoods.meats);
//     return foorResult;
//   });
// }

// console.log(food(data));
