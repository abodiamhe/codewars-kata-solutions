// Kata: Counting Duplicates
// Difficulty:  6 kyu
// Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  const count = {};
  const duplicate = [];

  text
    .toLowerCase()
    .split('')
    .forEach((el) => {
      count[el] = (count[el] || 0) + 1;
    });

  for (const el in count) {
    if (count[el] > 1) {
      duplicate.push(el);
    }
  }
  return duplicate.length;
}

console.log(duplicateCount('SMooth')); //1
