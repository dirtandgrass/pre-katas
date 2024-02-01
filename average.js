const calculateArrayAverage = function(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum / arr.length;
};

console.log(
  calculateArrayAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  calculateArrayAverage([1000, -1000, 50, -999]),
  calculateArrayAverage([1, 2, 3])
);