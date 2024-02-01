const average = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(
  average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  average([1000, -1000, 50, -999]),
  average([1, 2, 3])
);