// const obj1 = {
//   firstName: "toni",
//   lastName: "zoaretz",
//   age: 27,
// };

// const obj2 = {};
// // for (const [key, value] of Object.entries(obj1)) {
// //   console.log(Object.assign(obj2, { `${key}`: `${value}` }));
// // }

// function swap(obj) {
//   let result = {};
//   for (let i in obj) {
//     result[obj[i]] = i;
//     console.log(obj[i]);
//     console.log(i);
//   }
//   return result;
// }

// // i=> Key obj[i]=value
// console.log(swap(obj1));
// // obj1.firstName;
// // console.log(obj1["firstName"]);

function swap(obj) {
  let result = {};
  let keys = Object.keys(obj);
  // console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    result[value] = key;
  }
  return result;
}

const obj2 = {
  name: "toni",
  age: 27,
};

console.log(swap(obj2));

// obj2.city = "tel aviv";
// obj2.job = "teacher";
// console.log(obj2);
// let test = "yo-ho";
// obj2[test] = "happy";
// console.log(obj2);
