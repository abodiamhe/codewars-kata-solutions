// Kata: Break Camel Case
// Difficulty: 6 kyu
// Link: https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    newString += string[i].includes(string[i].toUpperCase())
      ? " " + string[i]
      : string[i];
  }
  return newString;
}

console.log(solution("camelCasingTest"));