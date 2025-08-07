/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let result = [];

    const backtrack = (combination, nextIndex) => {
        // Base case: If the combination is the same length as the digits string, we've found a complete combination.
        if (combination.length === digits.length) {
            result.push(combination);
            return;
        }

        // Get the letters for the current digit.
        const letters = mapping[digits[nextIndex]];

        // Loop through each letter and make a recursive call.
        for (let i of letters) {
            const letter = i;
            backtrack(combination + letter, nextIndex + 1);
        }
    };
    backtrack("", 0);
    return result;
};

const digits = "23";
console.log(letterCombinations(digits));