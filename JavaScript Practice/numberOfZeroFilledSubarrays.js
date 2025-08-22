/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let count = 0, occurrence = 0;

    for (let n of nums) {
        if (n === 0) {
            occurrence++;
            count += occurrence;
        } else {
            occurrence = 0;
        }
    }
    return count;
};

const nums = [1, 3, 0, 0, 2, 0, 0, 4];
console.log(zeroFilledSubarray(nums));
