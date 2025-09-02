/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
function firstIndex(n, i) { return i === 0; }
function greaterThan10(n) { return n > 10; }
const arr = [0,10,20,30];
console.log(filter(arr, greaterThan10));
