const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// /////////////////
people.shift();
console.log(people);
// ////////////////
people.pop();
console.log(people);
// ////////////////
people.unshift("Matt");
console.log(people);
// ////////////////
people.push("Toni");
console.log(people);
// ////////////////
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Mary") break;
  {
    console.log(people[i]);
  }
}
////////////////
console.log(people.slice(2));
////////////////
console.log(people.indexOf("Mary"));
////////////////
console.log(people.indexOf("foo"));
////////////////

people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//////////////
let withbob = people.concat("bob");
console.log(withbob);
