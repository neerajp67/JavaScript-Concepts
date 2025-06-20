// this file will contain the solution for checking if an string is palindrome


//Define common string for all the solutions
const str = "Hello World"; // Example string, can be changed to test other strings
let n = str.length; //for soliutions where length of string is required;
let newString = ""; //for solutions where new variable is required to store reversed string;

// method 1: using for loop to travrse the string from start to end and compare with the reverse order
function isPalindrome(str) {
  for (let i = 0; i < n / 2; i++) {
    // Compare characters from the beginning and end
    if (str[i] !== str[n - 1 - i]) {
      return false; // Mismatch found
    }
  }
  return true; // No mismatches found, it's a palindrome
}

console.log(isPalindrome(str));
