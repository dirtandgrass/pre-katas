const conditionalSum = function(values, condition) {

  if (!Array.isArray(values) || values.length === 0) {
    throw new Error("Invalid input");
  }

  const sum = values.reduce((acc, curr) => {
    if (condition === "even") {
      return curr % 2 === 0 ? acc + curr : acc;
    } else if (condition === "odd") {
      return curr % 2 !== 0 ? acc + curr : acc;
    }
    return 0;
  });
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));