function populationPercentages(arr) {
  let percentages = [];
  for (let i = 0; i < arr.length; i++) {
    percentages.push(arr[i] / 7900) * 100;
  }
  return percentages;
}

// let populations = [1439, 1380, 334, 221];
console.log(populationPercentages([1439, 1380, 334, 221]));
