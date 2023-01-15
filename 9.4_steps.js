function postivie(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j > i) {
        result += "?";
      } else {
        result += "#";
      }
      // console.log(result);
    }
    result += "\n";
  }
  return result;
}

console.log(postivie(3));
// console.log("toni");
