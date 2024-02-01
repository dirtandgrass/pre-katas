/**
 * Add four (4) numbers.
 */
const addFourNumbers = function() {
  let sum = 0;
  for (const summand of arguments) {
    if (typeof summand === 'number') {
      sum += summand;
    }
  }
  return sum;
};

console.log(addFourNumbers(1, 1, 1, 1)); // Expected: 4
console.log(addFourNumbers(0, 0, 0, 0)); // Expected: 0
console.log(addFourNumbers(1, 2, 3, 4)); // Expected: 10
console.log(addFourNumbers(100, -12, 36, -99)); // Expected: 25