/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const stack = [];
    const charMapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (charMapping[char]) {
            if (!stack.length || charMapping[char] !== stack[stack.length - 1]) return false;
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

const str = "([]{})";
console.log(isValid(str));

