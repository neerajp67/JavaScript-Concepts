/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return Math.max(...(accounts.map((item) => item.reduce((acc, cur) => {
        return acc + cur
    }, 0))))
};

const accounts = [[1, 2, 3], [3, 2, 1]];
console.log(maximumWealth(accounts));