// In your own words what will this point to and why?
// (Note this is the global scope)

console.log(this); //why empty?

// Question 2:
// a. In your own words what will this point to and why? - global object
// b. How can you fix this code? - usre function declartion

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// Question 3:
// In your own words what will this point to and why? - the function?
const myFuncDec = function () {
  console.log(this);
};

// Question 4:
// In your own words what will this point to and why? - global scop
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
