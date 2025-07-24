/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {

    let totalPoints = 0;
    let highPriorityPair, lowPriorityPair, maxPoints, minPoints;

    if (x > y) {
        highPriorityPair = 'ab';
        lowPriorityPair = 'ba';
        maxPoints = x;
        minPoints = y;
    } else {
        highPriorityPair = 'ba';
        lowPriorityPair = 'ab';
        maxPoints = y;
        minPoints = x;
    }

    const calculatePoints = (pair, points) => {
        const stack = []
        for (let ch of s) {
            if (ch === pair[1] && stack.length && stack[stack.length - 1] === pair[0]) {
                stack.pop();
                totalPoints += points;
            }
            else {
                stack.push(ch);
            }
        }
        s = stack.join('');
    }

    calculatePoints(highPriorityPair, maxPoints);
    calculatePoints(lowPriorityPair, minPoints);

    return totalPoints;
}

const s = 'aabbaaxybbaabb', x = 5, y = 4;
console.log((maximumGain(s, x, y)));
