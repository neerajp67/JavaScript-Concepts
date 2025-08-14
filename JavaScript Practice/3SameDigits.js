/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {

    let i = 2;
    let max = "";
    while (i < num.length) {
        if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
            let digit = num[i] + num[i - 1] + num[i - 2];
            max = max > digit ? max : digit;
            i = i + 2
        }
        i++;
    }
    return max;
};

const num = "2300019";
console.log(largestGoodInteger(num));
