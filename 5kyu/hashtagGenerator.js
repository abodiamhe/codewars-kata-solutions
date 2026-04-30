// Kata: hashtag generator
// Difficulty:  5 kyu
// Link: https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  const newString = str
    .split(' ')
    .map(el => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase())
    .join('');

  return newString.length >= 140 || newString.length <= 0 ? false : '#' + newString;
}

console.log(generateHashtag('do we have A Hashtag')); //#DoWeHaveAHashtag
