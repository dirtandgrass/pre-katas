const sumTwoLargestNumbers = function(data) {
  if (!Array.isArray(data) || data.length < 2) {
    throw new Error("Invalid input");
  }

  data.sort((a, b) => b - a); // sort in descending order, can cause non-integer result if NaN
  return data[0] + data[1];
};

console.log(sumTwoLargestNumbers([1, 10]));
console.log(sumTwoLargestNumbers([1, 2, 3]));
console.log(sumTwoLargestNumbers([10, 4, 34, 6, 92, 2]));