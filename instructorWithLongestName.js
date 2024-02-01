const instructorWithLongestName = function(instructors) {

  if (!Array.isArray(instructors) || instructors.length === 0) {
    throw new Error("Invalid input");
  }

  const longestName = instructors.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) { // if the current name is longer than the accumulator's name
      return curr; // replace the accumulator with the current object
    }
    return acc;
  });

  return longestName;
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