// Kata: Spine Words
// Difficulty:  6 kyu
// Link: https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  return string
    .split(' ')
    .map(word => (word.length > 4 ? word.split('').reverse().join('') : word))
    .join(' ');
}

console.log(spinWords('Hey fellow warriors')); //Hey wollef sroirraw
console.log(spinWords('This is a test')); //This is a test
