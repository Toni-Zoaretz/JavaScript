// You are given a function, Pokeman, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
// ● • A method called attack that takes one parameter
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const inst1 = new Pokemon("toni", "girl", ["a", "b", "c"]);
const inst2 = new Pokemon("tonia", "girl", ["a", "b", "c"]);
const inst3 = new Pokemon("tonic", "girl", ["a", "b", "c"]);

Pokemon.prototype.callPokemon = function () {
  return `i choos you ${this.name}`;
};

console.log(inst1.callPokemon());
// inst1.callPokemon();

// ● • A method called attack that takes one parameter
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function

Pokemon.prototype.attack = function (attackNumber) {
  return `${this.name} used ${this.attackList[attackNumber]}`;
};

console.log(inst1.attack(1));
