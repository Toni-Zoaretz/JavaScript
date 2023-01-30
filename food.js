import { onSnake, expandSnake } from "./snake.js";
import { randomGridPostion } from "./grid.js";

let food = getRandomFoodPostion();
const EXPANSTION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSTION_RATE);
    food = getRandomFoodPostion();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPostion() {
  let newFoodPostion;
  while (newFoodPostion == null || onSnake(newFoodPostion)) {
    newFoodPostion = randomGridPostion();
  }
  return newFoodPostion;
}
