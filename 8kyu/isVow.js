// Kata: Take a Ten Minute Walk
// Difficulty:  8 kyu
// Link: https://www.codewars.com/kata/57cff961eca260b71900008f

function isVow(a) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return a.map((Element) =>
    vowels.includes(String.fromCharCode(Element)) ? String.fromCharCode(Element) : Element
  );
}

console.log(
  isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106])
);
