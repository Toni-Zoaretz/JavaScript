// From function declarations to explicit and implicit
//return functions (one of each).
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

/////////--1 Ans--/////////
const welcome = () => {
  "Welcome to Appleseeds Bootcamp!";
};

//////////////////////////
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
/////////--2 Ans--/////////
const power = (a) => {
  a * a;
};

// From function expressions to IIFE functions.
const squareRoot = (a) => Math.sqrt(a);
/////////--1 Ans--/////////
function squareRoot(a) {
  return Math.sqrt(a);
}

/////////////////////////////
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
/////////--2 Ans--/////////
function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}
