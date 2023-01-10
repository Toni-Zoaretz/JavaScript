function sum(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }

  return result;
}

console.log(sum(["boo", "doooo", "hoo", "ro"]));
