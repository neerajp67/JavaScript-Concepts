/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let num = board[i][j];
            if (num !== ".") {
                if (rows[i].has(num) || cols[j].has(num) || boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(num)) {
                    return false;
                }
                rows[i].add(num);
                cols[j].add(num);
                boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(num);
            }
        }
    }
    return true;
};

const board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
console.log(isValidSudoku(board));