/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {

    let totalScore = 0;
    let highPriorityPair, highPoints, lowPriorityPair, lowPoints;

    if (x >= y) {
        highPriorityPair = "ab";
        highPoints = x;
        lowPriorityPair = "ba";
        lowPoints = y;
    } else {
        highPriorityPair = "ba";
        highPoints = y;
        lowPriorityPair = "ab";
        lowPoints = x;
    }

    const processString = (str, pair, points) => {
        let stack = [];
        let currentScore = 0;

        for (let char of str) {
            if (char === pair[1] && stack.length > 0 && stack[stack.length - 1] === pair[0]) {
                stack.pop(); // Found a pair, remove it
                currentScore += points;
            } else {
                stack.push(char); // No pair, add char to stack
            }
        }
        return { remainingStr: stack.join(''), score: currentScore };
    };

    // First pass: remove high priority pairs
    let firstPassResult = processString(s, highPriorityPair, highPoints);
    totalScore += firstPassResult.score;

    // Second pass: remove low priority pairs from the remaining string
    let secondPassResult = processString(firstPassResult.remainingStr, lowPriorityPair, lowPoints);
    totalScore += secondPassResult.score;

    return totalScore;
}

const s = 'aabbaaxybbaabb', x = 5, y = 4;
console.log((maximumGain(s, x, y)));
