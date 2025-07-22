/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if (!s.length) return 0;

    s = s.trim();
    if (!s.length) return 0;

    let sign = 1;
    let i = 0;
    if (s.startsWith('-')) {
        sign = -1;
        i++;
    }
    if (s.startsWith('+')) i++;
    if (i) s = s.slice(i);

    const MIN_INT = - Math.pow(2, 31);
    const MAX_INT = Math.pow(2, 31) - 1;
    let result = 0;

    for (let char of s) {
        if (isNaN(char) || char === ' ') return sign * result;

        result = Number(char) + result * 10;

        if (sign * result < MIN_INT) return MIN_INT;
        if (sign * result > MAX_INT) return MAX_INT;
    }
    return sign * result;
};

const s = '   +0 123';

console.log(myAtoi(s));
