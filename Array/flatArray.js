const arr = [1, 2, [3], 4, [[5]], 6, [[[[5]]]]]
let n = arr.length;

let newArray = []

// method 1: Using recursion
// function flatArray(array) {
//     for (let i = 0; i <= array.length - 1; i++) {
//         if (Array.isArray(array[i])) {
//             flatArray(array[i])
//         } else {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
// console.log(flatArray(arr))

// method 2: Using reduce
// function flatArray(array) {
//     return array.reduce((acc, val) => {
//         if (Array.isArray(val)) {
//             acc.push(...flatArray(val))
//         } else {
//             acc.push(val)
//         }
//         return acc
//     }, [])
// }
// console.log(flatArray(arr), arr)

// method 3: Using flat() method to flatten the array
// function flatArray() {
//     return arr.flat(Infinity)
// }
// console.log(flatArray())

// method 4: Using flat() method to flatten the array with a specified depth
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
function flatArray() {
    return arr.flat(4) // The number 4 indicates the depth to which the array should be flattened
}
console.log(flatArray())
