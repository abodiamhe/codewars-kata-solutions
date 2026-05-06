// Kata: Who Likes it?
// Difficulty:  6 kyu
// Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  if (names.length === 1) return `${names.at(0)} likes this`;
  if (names.length === 2) return `${names.at(0)} and ${names.at(1)} like this`;
  if (names.length === 3) return `${names.at(0)}, ${names.at(1)} and ${names.at(2)} like this`;
  if (names.length > 3)
    return `${names.at(0)}, ${names.at(1)} and ${names.splice(2).length} others like this`;
  return 'no one likes this';
}

console.log(likes([])); //no one likes this
console.log(likes(['Peter'])); // Peter likes this
console.log(likes(['Jacob', 'Alex'])); // Jacob and Alex like this
console.log(likes(['Max', 'John', 'Mark'])); // Max, John and Mark like this
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // Alex, Jacob and 2 others like this
