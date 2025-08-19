/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
    const EPSILON = 1e-6;

    const solve = (nums) => {
        // Base case: If only one number is left, check if it's close to 24.
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24) < EPSILON;
        }

        // Iterate through all unique pairs of numbers.
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {

                // Create a new array with the remaining numbers.
                const remainingNums = [];
                for (let k = 0; k < nums.length; k++) {
                    if (k !== i && k !== j) {
                        remainingNums.push(nums[k]);
                    }
                }

                // Get the two numbers to operate on.
                const a = nums[i];
                const b = nums[j];

                // Try all 6 possible operations and recurse with the new array.
                // Addition and Multiplication (commutative)
                if (solve([...remainingNums, a + b])) return true;
                if (solve([...remainingNums, a * b])) return true;

                // Subtraction (not commutative)
                if (solve([...remainingNums, a - b])) return true;
                if (solve([...remainingNums, b - a])) return true;

                // Division (not commutative, and handle division by zero)
                if (b !== 0 && solve([...remainingNums, a / b])) return true;
                if (a !== 0 && solve([...remainingNums, b / a])) return true;
            }
        }

        return false;
    };

    return solve(cards);
};

const cards = [4,1,8,7];
console.log(judgePoint24(cards));
