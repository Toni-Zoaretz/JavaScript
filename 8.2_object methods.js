const mycountry = {
  country: "israel",
  capital: "jeruslam",
  language: "hebrew",
  population: 9,
  neighbours: ["jordan", "egypt", "suria"],
  describe: function () {
    return `${this.country} has ${this.population} their mother tongue is ${this.language} they have 3 neihbouring countries ${this.neighbours} and a cpital ${this.capital}`;
  },

  checkIsland: function () {
    if (this.neighbours === 0) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(mycountry.describe());
console.log(mycountry.checkIsland());
