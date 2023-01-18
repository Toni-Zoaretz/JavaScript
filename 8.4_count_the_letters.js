// const names = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
// const str = names.join();
// const arr2 = str.split(""); ///names array letter only

// function countDuplicat(arr) {
//   let objDuplicate = {};
//   const str = arr.join();
//   const arr1 = str.split(" ");
//   let letter = [];
//   let count = 1;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr1[i + 1]) {
//       count++;
//     } else {
//       let value = `${count}${arr1[i]}`;
//       letter = [...letter, value];
//       count = 1;
//     }
//   }
//   return (objDuplicate = Object.assign({}, letter));
// }

// console.log(
//   countDuplicat(["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"])
// );

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function countDuplicat(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let letters = arr[i].split("");
    for (let j = 0; j < letters.length; j++) {
      let letter = letters[j].toLowerCase();
      if (result[letter] && isLetter(letter)) {
        result[letter] = result[letter] + 1;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
}

console.log(countDuplicat(array));

// // function isLetter(char) {
//   // return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
// }
