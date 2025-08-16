/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 1) return true;
    if (n % 4 !== 0 || n < 1) return false;
    return isPowerOfFour(n / 4)
};

const n = 16;
console.log(isPowerOfFour(n));
