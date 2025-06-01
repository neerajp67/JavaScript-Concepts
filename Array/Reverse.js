// this file will contain the solution for reversing an array in different ways:

//Define common array for all the solutions
const arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;

// method 1: using Array.reverse(), changes orignal array
// let reversedArray = arr.reverse();
// console.log(reversedArray);

// method 2: using Array.toReversed(), changes orignal array (older browsers may not support this method)
let reversedArray = arr.toReversed();
console.log(reversedArray);


