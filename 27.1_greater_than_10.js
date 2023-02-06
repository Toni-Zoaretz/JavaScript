// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch

// const willGetMeDog = new Promise((resolve, reject) => {
//   const ten = Math.floor(Math.random() * 20) + 1;
//   if (ten > 10) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// willGetMeDog
//   .then(() => {
//     console.log("above 10 baby");
//   })
//   .catch(() => {
//     console.log("below");
//   })

function greaterThan10(num) {
  const above10 = new Promise((resolve, reject) => {
    if (num >= 10) {
      resolve();
    } else {
      reject();
    }
  });
  above10.then(() => {
    console.log("amazing greater then 10");
  });
  above10.catch(() => {
    console.log("this is below 10");
  });
}

greaterThan10(8);
