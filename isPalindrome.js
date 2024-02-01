const isPalindrome = function(str) {
  return str.split('').reverse().join('') === str;
};

console.log(
  isPalindrome('racecar'),
  isPalindrome('abba'),
  isPalindrome('abc'),
  isPalindrome('abracadabra'),
  isPalindrome('kayak'),
);