const countVowels = function(data) {
  if (typeof data !== 'string') {
    throw new Error("Invalid input");
  }
  return data.match(/[aeiou]/gi).length; // find matches vowels, case insensitive, get count
};

console.log(countVowels("orange"));
console.log(countVowels("lighthouse labs"));
console.log(countVowels("aeiou"));