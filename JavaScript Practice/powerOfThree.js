/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n === 1) return true;
    if (n % 3 !== 0 || n < 1) return false;
    return isPowerOfThree(n/3)
};

const n = 21;
console.log(isPowerOfThree(n));
