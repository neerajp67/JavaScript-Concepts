const arr = [1, 2, 3, 4, 3, 2, 6, 1, 6];
const n = arr.length;

let uniqueArray = [];

// method 1: using set, create new array
// let set = new Set(arr) //creating a set out of array, set can hold only unique items so duplicate items are removed
// uniqueArray = [...set]; //using spred operator (...) to extract values from set and create an array and assign it to uniqueArray
// console.log(uniqueArray)

// method 2: shorthand for the method 1
// uniqueArray = [...new Set(arr)];
// console.log(uniqueArray)

// method 3: using for loop and includes(), create new array
// for (let i = 0; i <= n - 1; i++) {
//     if (!uniqueArray.includes(arr[i])) {
//         uniqueArray.push(arr[i]);
//     }
// }
// console.log(uniqueArray);

// method 4: using forEach loop and includes(); same as method 3, create new array
// arr.forEach(element => {
//     if (!uniqueArray.includes(element)) {
//         uniqueArray.push(element);
//     }
// });
// console.log(uniqueArray);

//method 5: using for loop and indexOf(), creates new array
// for (let i = 0; i <= n - 1; i++) {
//     if(arr.indexOf(arr[i]) == i) {
//         uniqueArray.push(arr[i]);
//     }
// }
// console.log(uniqueArray);

//method 5: using forEach loop and indexOf(); same as method 5, creates new array
// arr.forEach((element, index) => {
//     if(arr.indexOf(element) == index) {
//         uniqueArray.push(element);
//     }
// });
// console.log(uniqueArray);


// method 6: using reverse for loop and splice, modify original array
// for (let i = n - 1; i >= 0; i--) {
//     if(arr.indexOf(arr[i]) !== i) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// method 6: using filter
// uniqueArray = arr.filter((item, index) => arr.indexOf(item) == index);
// console.log(uniqueArray)


// method 7: using 2 for loops to modify original array
// need to check this for edege cases and optimization
// for (let i = arr.length - 1; i >= 1; i--) {
//     for (let j = i - 1; j >= 0; j--) {
//         if (arr[j] === arr[i] && i != j) {
//             arr.splice(i, 1);
//         }
//     }
// }
// console.log(arr);
