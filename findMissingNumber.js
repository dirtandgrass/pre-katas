const findMissingNumber = function(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) {
    throw new Error("Invalid input");
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i] - 1) {
      return arr[i - 1] + 1;
    }
  }

  return false;
};

console.log(
  findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]),
  findMissingNumber([100, 101, 102, 103, 105, 106, 107]),
  findMissingNumber([-3, -2, -1, 1, 2, 3])
);