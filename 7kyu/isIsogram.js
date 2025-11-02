// Kata: Is Isogram
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  //...
  //Covert str to lowerCase, remove duplicate by using Set() then compare lenght
  return new Set(str.toLowerCase()).size === str.length;
}

isIsogram('Dddermatoglyphics');
