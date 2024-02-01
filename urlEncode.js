const urlEncode = function(text) {
  // can't use replace, must have loop...
  let encoded = text.split("");
  for (let i = 0; i < encoded.length; i++) {
    if (encoded[i] === ' ') {
      encoded[i] = '%20';
    }
  }

  return encoded.join("");

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));