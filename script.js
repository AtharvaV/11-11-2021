"use strict";

function product(a, b) {
  return function (c, d) {
    return function (x, y) {
      return a * c * x + b * d * y;
    };
  };
}

const pro = product(1, 2)(1, 1)(2, 3);
console.log(pro);

// Reorder Digits

function reorderDigits(arr, direction) {
  let result;
  if (direction === "asc") {
    result = arr.map((x) => Number(x.toString().split("").sort().join("")));
  } else {
    result = arr.map((x) =>
      Number(
        x
          .toString()
          .split("")
          .sort((a, b) => b - a)
          .join("")
      )
    );
  }
  return result;
}
console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));

// Get Students with Names and Top Notes

function getStudentsWithNamesAndTopNotes(students) {
  const result = students.map((x) => Math.max(x.notes));
  return result;
}
console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ])
);
