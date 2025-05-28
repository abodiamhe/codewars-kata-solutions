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
