/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    let diff1 = Math.abs(x - z);
    let diff2 = Math.abs(y - z);
    return diff1 === diff2 ? 0 : diff1 < diff2 ? 1 : 2
};