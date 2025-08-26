/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let max = 0;
    let maxArea = 0
    for (let [i, j] of dimensions) {
        let sqrt = Math.sqrt((i * i + j * j));
        let area = i * j
        if (sqrt > max || (sqrt === max && area > maxArea)) {
            max = sqrt;
            maxArea = area;
        }
    }
    return maxArea;
};