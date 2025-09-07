/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    const res = [];
    if(n % 2 !== 0) {
        res.push(0);
    }
    for (let i = 1; i <= n/2; ++i) {
        res.push(i);
        res.push(-i);
    }
    return res;
};

const n = 5;
console.log(sumZero(n));