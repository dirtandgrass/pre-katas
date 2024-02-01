const sumLargestNumbers = function (data) {
  if (data.length < 2) {
    return 0
  }
  data.sort((a, b) => b - a)
  return data[0] + data[1]
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));