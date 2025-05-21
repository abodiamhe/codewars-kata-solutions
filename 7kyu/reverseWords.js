// Kata: Reverse Words
// Difficulty: 7 kyu
// Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  // Go for it
  //1:Convert long string to array
  const strArray = str.split(" ");
  
  //2: Conver each string in the array to sub-array
  const strReverse = strArray.map((str) => { 
    return str.split("")
  }) 
  
  //3:reverse each string in the array
  const reverseAr = []
  for(ele of strReverse) {
    //3a: reverse each string
    const reverse = ele.reverse();
    //3b: joing the sub-array
    reverseAr.push(reverse.join(""));
  }
  
  //Join the main array
  return reverseAr.join(" ");
}

console.log(reverseWords("This is an example!"));
