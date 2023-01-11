function removeDupicate(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // i = 2
    // result [3, 4]
    // arr[i=2] = 4
    // [3,4].indexOf(4) === -1 = ?
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDupicate([3, 4, 4, 3, 6, 3]));
