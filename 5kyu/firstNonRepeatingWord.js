// Kata: First Non Repeating Word
// Difficulty:  5 kyu
// Link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  let newValue = {};

  for (const char of s) {
    let lowerCase = char.toLowerCase();
    newValue[lowerCase] = (newValue[lowerCase] || 0) + 1;
  }

  for (const char of s) {
    //use the lowerCase to compare before returning original case
    if (newValue[char.toLowerCase()] === 1) return char;
  }

  return '';
}

console.log(firstNonRepeatingLetter('sTreSs')); // 't'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'
