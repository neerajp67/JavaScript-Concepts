const arr = [1, 2, [3], 4, [[5]], 6, [[[[5]]]]]
let n = arr.length;

let newArray = []


function flatArray(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (Array.isArray(array[i])) {
            flatArray(array[i])
        } else {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(flatArray(arr))


