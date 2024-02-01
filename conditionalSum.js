const conditionalSum = function (values, condition) {

  if (typeof values !== 'object' || values.length === 0) {
    return 0;
  }

  const sum = values.reduce((acc, curr) => {
    if (condition === "even") {
      return curr % 2 === 0 ? acc + curr : acc;
    } else if (condition === "odd") {
      return curr % 2 !== 0 ? acc + curr : acc;
    }
    return 0;
  }, 0)
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));