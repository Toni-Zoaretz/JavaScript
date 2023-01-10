function integer(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    result += arr[i];
  }
  return result;
}

console.log(integer([3, 4, 4, 3, 6, 3]));
