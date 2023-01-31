// Instructions
// 1. Build your own filter method with the help of prototypes
// 2. Build your own find method with the help of prototypes
// Extra
// 3. Build your own reduce method with the help of prototypes

const numbers = [10, 10, 2, 1];

Array.prototype.mfilter = function (fun) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

const filter2 = numbers.mfilter(function (el, index, arr) {
  return el > 5;
});
console.log(filter2);
// -----------------------------------FIND METHOD-----------------------------------------
Array.prototype.mfind = function (fun) {
  let filtered = "";
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) {
      filtered = true;
    } else {
      filtered = false;
    }
  }
  return filtered;
};

const finde = numbers.mfind(function (el, index, arr) {
  return el < 5;
});
console.log(finde);
// --------------------REDUCE METHOD-------------------------------
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

let sum = numbers.myReduce(function (acuu, curr) {
  return acuu + curr;
});
console.log(sum);
