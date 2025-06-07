// this file will contain the solution for reversing an string in different ways:

//Define common string for all the solutions
const str = "Hello World!";
let n = str.length;

let newString = ""; //for solutions where new variable is required to store reversed string;

// method 1: Using split(), reverse() and join(), create new string
newString = str.split("").reverse().join("");
console.log(newString)
