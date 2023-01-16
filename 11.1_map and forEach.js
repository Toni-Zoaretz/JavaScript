const data = [
  {
    name: "roni",
    age: 20,
    friends: ["dana", "omer", "yuval"],
  },
  {
    name: "yuval",
    age: 25,
    friends: ["dana", "omer", "yuval"],
  },
  {
    name: "tomer",
    age: 15,
    friends: ["dana", "omer", "yuval"],
  },
];

let arr = [];
data.forEach(function (n) {
  arr.push({ name: n.name, age: n.age });
});

console.log(arr);

let arr2 = data.map(function (n) {
  return { name: n.name, age: n.age };
});

console.log(arr2);
