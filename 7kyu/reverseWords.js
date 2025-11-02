// Kata: Reverse Words
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('This is an example!'));
