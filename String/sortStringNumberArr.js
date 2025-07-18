// const unsortedArr = ['1', '2', '10', '23', '30']
// const unsortedArrLen = unsortedArr.length;
// const sortedArr = [];

// function sortArr() {
//     for (let i = 0; i < unsortedArrLen; i++) {
//         if (unsortedArr[i].length > unsortedArr[i + 1].length) {
//             const temp = unsortedArr[i]
//             unsortedArr[i] = unsortedArr[i + 1]
//             unsortedArr[i + 1] = temp
//         }
//     }
// }
// console.log(unsortedArr.sort());


// sort array of string alphabeticaly
const unsortedAtringArr = ['banana', 'apple', 'cat', 'Dog', 'tomato']
const unsortedArrLen = unsortedAtringArr.length;
const sortedArr = [];

function sortArr() {
    for (let i = 0; i < unsortedArrLen; i++) {
        if (unsortedAtringArr[i].toLowerCase > unsortedAtringArr[i + 1].toLowerCase) {
            const temp = unsortedAtringArr[i]
            unsortedAtringArr[i] = unsortedAtringArr[i + 1]
            unsortedAtringArr[i + 1] = temp
        }
    }
}
sortArr();

// console.log(unsortedAtringArr)


