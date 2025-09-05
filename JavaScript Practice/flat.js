/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) return arr
    const resultArr = [];

    const flatten = (item, n) => {
        if (Array.isArray(item) && n > 0) {
            for (let i of item) {
                flatten(i, n - 1)
            }
        }
        else {
            return resultArr.push(item)
        }
    }

    flatten(arr, n+1)

    return resultArr;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 1
console.log((flat(arr, n)));
