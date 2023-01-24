Array.prototype.myFilter = function (func) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
Array.prototype.myForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
};

Array.prototype.myMap = function (func) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(func(this[i], i, this));
  }
  return arr;
};

const array = [1, 2, 3];

array.myMap((el) => el + 3);

const tony = {
  name: "tony",
};

tony.age = 27;
