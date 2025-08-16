/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let str = num + "";
    let index = str.indexOf('6');
    if (index !== -1) {
        return Number(str.replace('6', '9'));
    }
    return num
};

const n = 9999;
console.log(maximum69Number(n));
