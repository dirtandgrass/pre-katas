const arrayIntersections = function(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
};

console.log(
  arrayIntersections([-2, -1, 1, 2, 3], [1, 2, 3, 4, 5, 6]),
  arrayIntersections(['dog', 'cat', 'fish'], ['centipede', 'fish', 'bird']),
  arrayIntersections([1, 'hello', true], [2, 'goodbye', true])
);