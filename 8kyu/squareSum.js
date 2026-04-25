// Kata: return sum of the square of array
// Difficulty:  8 kyu
// Link: https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num ** 2;
  }
  return sum;
}

console.log(squareSum([0, 3, 4, 5])); //50
