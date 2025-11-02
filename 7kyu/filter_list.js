// Kata: Is Isogram
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((ls) => typeof ls === 'number');
}

console.log(filter_list([1, 'a', 'b', 0, 15]));
