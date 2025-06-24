// this file will contain the solution for getting non recuring items in an array and first recurring item in an array

const arr = [1, 2, 3, 4, 3, 2, 6, 1, 6];
const n = arr.length;

//first recurring item in an array

// method 1: using for loop to iterate through the array and return 1st recurring item
// function firstRecurringItem(arr) {
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] === arr[j]) {
//                 return arr[i];
//             }
//         }
//     }
//     return null; // if no recurring item found
// }
// console.log(firstRecurringItem(arr));

