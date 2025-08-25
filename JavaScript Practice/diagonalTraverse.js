/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const m = mat.length, n = mat[0].length
    const res = [];
    let row = 0, col = 0;

    for (let i = 0; i < m * n; i++) {
        res[i] = mat[row][col];
        if ((row + col) % 2 === 0) {
            if (col === n - 1) row++;
            else if (row === 0) col++;
            else { row--; col++; }
        }
        else if (row === m - 1) col++;
        else if (col === 0) row++;
        else { row++; col--; }
    }
    return res;
};