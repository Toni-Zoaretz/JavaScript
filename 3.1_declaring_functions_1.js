// From function declarations to function expressions
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
/////////--1 Ans--/////////
const welcomeMessage = function () {
  return "Welcome to Appleseeds Bootcamp!";
};

///////////////////
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

/////////--2 Ans--/////////
const sum1 = function (a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

////////////////////////
function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

/////////--3 Ans--/////////
const add1 = function (a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations
const hello = () => "Hello!";
const squareRoot = (a) => Math.sqrt(a);
const randomNumbers = (a, b) => Math.random() * (a - b) + b;

/////////--1 Ans--/////////
function hello() {
  return "Hello!";
}

/////////--2 Ans--/////////
function squareRoot(a) {
  return Math.sqrt(a);
}

/////////--3 Ans--/////////
function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}
