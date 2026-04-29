// Kata: Tribonacci sequence
// Difficulty:  6 kyu
// Link: https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
  if (n < 3) signature = signature.slice(0, n);
  else
    for (let i = 3; i < n; i++)
      signature.push(signature.at(-3) + signature.at(-2) + signature.at(-1));

  return signature;
}

console.log(tribonacci([1, 1, 1], 10)); //[3,2,1,6,9,16,31,56,103,190]
