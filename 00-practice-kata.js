/**
 * Add all numbers from the input array
 */
const sumNumbersFromArray = function() {
  return [...arguments].reduce((acc, curr) => {
    if (typeof curr === 'number') {
      acc += curr;
    }
    return acc;
  }, 0);

};

console.log(sumNumbersFromArray(1, 1, 1, 1)); // Expected: 4
console.log(sumNumbersFromArray(0, 0, 0, 0)); // Expected: 0
console.log(sumNumbersFromArray(1, 2, 3, 4)); // Expected: 10
console.log(sumNumbersFromArray(100, -12, 36, -99)); // Expected: 25