const numberOfVowels = function (data) {
  if (typeof data !== 'string') {
    return 0;
  }
  return data.match(/[aeiou]/gi).length
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));