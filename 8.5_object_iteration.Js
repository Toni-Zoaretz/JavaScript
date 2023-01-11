const obj1 = {
  firstName: "toni",
  lastName: "zoaretz",
  age: 27,
};

for (const [key, value] of Object.entries(obj1)) {
  console.log(`${value}:${key}`);
}
