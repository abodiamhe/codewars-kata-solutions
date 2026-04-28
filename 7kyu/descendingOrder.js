// Kata: descending order
// Difficulty:  7 kyu
// Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(descendingOrder(123465897)); //987654321
