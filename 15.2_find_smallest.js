function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}

console.log(findSmallest(52, 66, 2));
// i udes concol log
