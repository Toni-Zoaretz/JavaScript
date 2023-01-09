function seven(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) {
      result = "BOOM";
    }
    if (i.toString().includes("7")) {
      result = "BOOM-BOOM";
    }
  }

  return result;
}

console.log(seven(21));
