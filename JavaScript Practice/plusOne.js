/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let reminder = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (!reminder) return digits
        let sum = digits[i] + reminder;
        digits[i] = sum % 10;
        reminder = Math.floor(sum / 10);
    }
    if (reminder) {
        digits.unshift(reminder);
    }
    return digits
};

const digits = [9,9,9];
console.log(plusOne(digits));
