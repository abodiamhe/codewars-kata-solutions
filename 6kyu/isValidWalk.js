// Kata: Take a Ten Minute Walk
// Difficulty: 6 kyu
// Link: https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length === 10) {
    let ns = 0, we = 0;

    walk.forEach((element) => {
      if (element === "n") ns += 1;
      if (element === "s") ns -= 1;
      if (element === "e") we += 1;
      if (element === "w") we -= 1;
    });
    return ns === 0 && we === 0 ? true : false;
    
  } else {
    return false; // return false if walk not 10
  }
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

function walking(walk) {
  let ns = 0;

  if(walk.length === 10) {
    walk.forEach((value) => {
      if(value === 'n') ns += 1
      if(value === 's') ns -= 1

    })
  } else {
    return false
  }
  
  return ns === 0 ? true : false
}

console.log(walking(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])) 

// function isLeap(year) { 
//   if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return 'Leap year'
//   }

//   return 'Not a leap year'
// }

// console.log(isLeap(2024))

// let output = []
// let count = 1

// function fizzbuzz() {
//   while(count <= 100) {
//     if(count % 3 === 0 && count % 5 === 0) {
//       output.push('fizzbuzz')
//     }
//    else if(count % 3 === 0) {
//       output.push('fizz')
//     }
//     else if(count % 5 === 0) {
//       output.push('buzz')
//     }
//     else {output.push(count)}
//     count++
//   }
// }
// fizzbuzz() 

// function fibonacci(n) {
//   let outputNum = [];
//   if(n === 1) {
//     outputNum = [0]
//   } else if(n === 2) {
//     outputNum = [0, 1]
//   } else {
//     outputNum = [0, 1]
//     let i = 2;
//     while(i < n) {
//       outputNum.push(outputNum[outputNum.length - 2] + outputNum[outputNum.length - 1])
//       i++
//     }
//   }

//   return outputNum
// }

// console.log(fibonacci(10))