// this file will contain the solution for reversing an array in different ways:

//Define common array for all the solutions
const arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;

let newArray = []; //for solutions where new array is required to store unique items;

// method 1: using Array.reverse(), changes orignal array
// console.log(arr.reverse());

// method 2: using Array.toReversed(), changes orignal array (older browsers may not support this method)
// console.log(arr.toReversed());

// method 3: using for loop to modify orignal array by swaping the items
// for (let i = 0; i <= n/2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[n - 1 -i];
//     arr[n - 1 -i] = temp;
// }
// console.log(arr)

// method 4: using for loop, create new array
// for (let i = 0; i <= n -1; i++) {
//     newArray.unshift(arr[i]); //add the item at the start of the array
// }
// console.log(newArray)

// method 5: using forEach loop (similar to method 4), create new array
// arr.forEach(element => {
//     newArray.unshift(element);    
// });
// console.log(newArray)

// method 6: using reverse for loop, create new array
// for(let i = n - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
// }
// console.log(newArray);

// method 7: using reduce(); iterates array from left to right, return new array
// newArray = arr.reduce((acc, cur) =>{
//     acc.unshift(cur);
//     return acc
// }, [])
// console.log(newArray)

// method 8: using reduceRIght(); iterates array from right to left, return new array
// newArray = arr.reduceRight((acc, cur) => {
//     acc.push(cur);
//     return acc
// }, [])
// console.log(newArray)




