// Kata: Is Isogram
// Difficulty: 6 kyu
// Link: https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    if (arr.length === 0) arr.push("(") 
    if (arr.length === 4) arr.push(") ") 
    if (arr.length === 9) arr.push("-")
    
    arr.push(numbers[i]);
  }

 return arr.join("");
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

