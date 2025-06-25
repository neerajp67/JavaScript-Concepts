// this file will contain the solution for getting non recuring items in an array and first recurring item in an array

const arr = [1, 2, 3, 4, 3, 2, 6, 1, 6];
const n = arr.length;

// first recurring item in an array

// method 1: using for loop to iterate through the array and return 1st recurring item
// this will return the first recurring item based on the item. 
// eg. if the array is [1, 2, 3, 4, 3, 2, 6, 1, 6] it will return 1 
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

//method 2: using another arrary to keep track of seen items, this will return the item that is first recurring in the array
// this method will return the first recurring item based on the position of the item in the array
// eg. if the array is [1, 2, 3, 4, 3, 2, 6, 1, 6] it will return 3
// function firstRecurringItem() {
//     let seenItems = [];
//     for (let i = 0; i < n; i++) {
//         if(seenItems.includes(arr[i])) {
//             return arr[i];
//         }
//         seenItems.push(arr[i])
//     }
// }
// console.log(firstRecurringItem());

// first non-recurring item in an array

// method 1: using for loop to iterate through the array and return first non-recurring item
// function firstNonRecurringItem() {
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] === arr[j]) {
//                 break; // if we find a match, break the inner loop
//             }
//             if (j === n - 1) { // if we reach the end of the array without finding a match
//                 return arr[i]; // return the non-recurring item
//             }
//         }
//     }
// }
// console.log(firstNonRecurringItem());

// method 2: using 2 more array to keep track of seen items and non recurring items, this will return the first non-recurring item in the array
function firstNonRecurringItem() {
    let seenItems = [];
    let nonRecurringItems = [];
    for (let i = 0; i < n; i++) {
        if (seenItems.includes(arr[i])) {
            nonRecurringItems = nonRecurringItems.filter( (item) => item !== arr[i])
        } else {
            seenItems.push(arr[i]);
            nonRecurringItems.push(arr[i]);
        }
    }
    return nonRecurringItems[0] || null;
}
console.log(firstNonRecurringItem());



