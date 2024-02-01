const instructorWithLongestName = function (instructors) {

  let longest = -1
  let result = null
  for (let inst of instructors) {
    if (inst.name.length > longest) { // don't replace if ==
      longest = inst.name.length
      result = inst
    }
  }

  return result
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);