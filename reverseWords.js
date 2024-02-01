const reverseWords = function(str) {
  if (typeof str !== 'string') return new Error('Input must be a string');
  return str.split(/\s+/).reverse().join(' ');
};

console.log(
  reverseWords('hello and welcome to Lighthouse Labs')
);
console.log(
  reverseWords('The quick brown fox')
);
console.log(
  reverseWords('am I Yoda')
);