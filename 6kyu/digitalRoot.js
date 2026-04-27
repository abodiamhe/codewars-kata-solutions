// Kata: Digital Root
// Difficulty:  6 kyu
// Link: https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  while (n >= 10) {
    n = n
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);
  }

  return n;
}

console.log(digitalRoot(7854)); //6
