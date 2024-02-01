const removeDuplicateArrayEls = function(arr) {
  return [...new Set(arr)]; // create a set from values (sets have unique values) and convert back to an array
};

console.log(
  removeDuplicateArrayEls([1, 2, 2, 2, 3, 4, 5]),
  removeDuplicateArrayEls(['a', 'b', 'b', 'c', 'd', 'e', 'e', 'a', 'f']),
);