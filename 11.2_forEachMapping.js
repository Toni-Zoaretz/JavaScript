// const double = arr.map(function (n) {
//   return n * 2;
// });

// console.log(double);

// const arr = [10, 10, 10, 7];
// let arrEven = [];
// const answer = arr.map(function (n) {
//   if (n % 2 === 0) {
//     return arrEven.push(n);
//   }
// });
// console.log(arrEven);

// let newTest = [];
// const result = test.map(function (x, i) {
//   if (typeof x === "string") {
//     if (i === 0 || i === test.length - 1) {
//       return newTest.push(x);
//     }
//   }
// });

/*. Write a function called vowelCount which accepts a string
as an argument. The function should return an object
which has the count of the number of vowels that are in
the string. The key should be the vowel and the value
should be the count. e.g. {a:3, o:2,u:4}. Should not be
case-sensitive.*/

// const name1 = "aaaoouuuu";
// const name2 = name1.split("");
// let arr = [];

// name2.forEach(function (x) {
//   arr.push({ key1: x });
// });

// console.log(arr);

// const str = "toni";
// const arr = str.split(" ");
// console.log(arr);

// let strToUpperCase = [];
// arr.forEach(function (x) {
//   strToUpperCase.push(x.toUpperCase());
// });

// console.log(strToUpperCase.join());

// const str = "pizza apple powder glass";
// const arr = str.split(" ");
// // console.log(arr);
// let answer = [];
// arr.forEach(function (x, i) {
//   if (i % 2 === 0) {
//     answer.push(x.toLowerCase());
//   }
//   if (i % 2 !== 0) {
//     answer.push(x.toUpperCase());
//   }
// });

// console.log(answer);
// *********************************lily************************
// function vowelCount(str) {
//   let result = {};
//   const arr = str.split("");
//   arr.forEach(function (x) {
//     let lower = x.toLowerCase();
//     if (
//       lower === "a" ||
//       lower === "o" ||
//       lower === "u" ||
//       lower === "i" ||
//       lower === "e"
//     ) {
//       if (result[lower]) {
//         result[lower] = result[lower] + 1;
//       } else {
//         result[lower] = 1;
//       }
//     }
//   });
//   return result;
// }

// console.log(vowelCount("aaanjllloui"));
// *********************lilt*****************************

// function shiftLetters(str) {
//   let arr = str.split("");
//   let shiftStr = "";
//   arr.forEach(function (x, index) {
//     let codeNumber = str.charCodeAt(index);
//     let newChar = String.fromCharCode(codeNumber - 1);
//     shiftStr = shiftStr + newChar;
//   });
//   return shiftStr;
// }

// console.log(shiftLetters("bcv"));
