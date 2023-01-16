const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// function getCandy(candyStore, id) {
//   const candyById = candyStore.candies.find((candy) => candy.id === id);
//   return candyById;
// }

function getCandy(candyStore, id) {
  const candyPrice = candyStore.candies.find((price) => price.id === id);
  return price.price;
}

console.log(getCandy(candyStore, "5hd7y"));

// function addCandy(candyStore, id, name, price) {}

// console.log(addCandy(candyStore, "d4ew", "mars", 1));
