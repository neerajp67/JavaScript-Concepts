const arr = [1, 2, 3, 4, 3, 2, 5, 6, 5, 6];
const n = arr.length;

let uniqueArray = [];

// method 1: using set, create new array
// let set = new Set(arr) //creating a set out of array, set can hold only unique items so duplicate items are removed
// uniqueArray = [...set]; //using spred operator (...) to extract values from set and create an array and assign it to uniqueArray
// console.log(uniqueArray)

// method 2: shorthand for the method 1
uniqueArray = [...new Set(arr)];
console.log(uniqueArray)