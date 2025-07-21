/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MIN_INT = -Math.pow(2, 31);
    const MAM_INT = Math.pow(2, 31) - 1;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let reversed = 0;

    while (x > 0) {
        let lastDigit = x % 10;
        reversed = lastDigit + reversed * 10;

        if (reversed > MAM_INT || reversed < MIN_INT) return 0;
        x = Math.floor(x / 10);
    }
    return reversed * sign;
};

const num = -12334234;

console.log(reverse(num));
