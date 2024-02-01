const reverseWords = function (str) {
  return str.split(/\s+/).reverse().join(' ');
}

console.log(
  reverseWords('hello and welcome to Lighthouse Labs'),
  reverseWords('am I Yoda')
);