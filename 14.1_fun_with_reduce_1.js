const arr1 = [10, 2, 8, 13];

function findMax(arr) {
  const result = arr1.reduce((acc, cur) => {
    acc = Math.max(cur);
    return acc;
  });

  return result;
}

console.log(findMax([10, 2, 8, 13]));
// console.log(result);

function evenNumber(arr) {
  const result2 = arr1.reduce((accu, curr) => {
    if (curr % 2 === 0) {
      accu += curr;
    } else {
      accu += 0;
    }
    return accu;
  });

  return result2;
}

console.log(evenNumber(arr1));

const arr1 = [10, 2, 8, 13]; //8.25

const avg = (arr) => {
  const sum = arr1.reduce((accu, curr) => accu + curr);
  return sum / arr.length;
};

console.log(avg(arr1));
