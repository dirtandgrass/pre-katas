const sumEvenIndices = function (arr) {
  return arr.reduce((acc, curr, i) => {
    return i % 2 === 0 ? acc + curr : acc
  })
};

console.log(sumEvenIndices([1, 2, 3, 4, 5, 6, 7]), sumEvenIndices([3, 6, 9, 100, 1]));