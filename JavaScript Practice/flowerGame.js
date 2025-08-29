/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
    return Math.floor(n * m / 2);
};

const n = 2, m = 3;
console.log(flowerGame(n, m));