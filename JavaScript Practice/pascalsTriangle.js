/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [[1]];
    let sum = arr;

    for (let i = 1; i < numRows; i++) {
        sum = sumArr(sum)
        arr.push(sum);
    }

    return arr;
};

function sumArr(arr) {
    let sum = [1];
    for (let i = 0; i < arr.length - 1; i++) {
        sum.push(arr[i] + arr[i + 1] || 0);
    }
    sum.push(1);
    return sum
}

const numRows = 5;

console.log(generate(numRows));
