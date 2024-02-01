const sumEvenIndices = function(arr) {
  return arr.reduce((sum, curr, i) => {
    return i % 2 === 0 ? sum + curr : sum; // if the index is even, add it to the sum
  });
};

console.log(sumEvenIndices([1, 2, 3, 4, 5, 6, 7]));
console.log(sumEvenIndices([3, 6, 9, 100, 1]));