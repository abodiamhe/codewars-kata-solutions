// Kata: Array difference
// Difficulty:  6 kyu
// Link: https://www.codewars.com/kata/523f5d21c841566fde000009

const arrayDiff = (a, b) => {
  return a.filter((el) => !b.includes(el));
};

console.log(arrayDiff([1, 2, 3], [1, 2])); //[3]
