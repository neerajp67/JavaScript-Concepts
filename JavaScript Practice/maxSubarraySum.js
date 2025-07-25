/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    let positiveItems = new Set(nums.filter((n) => n > 0));
    return positiveItems.size ? [...positiveItems].reduce((acc, c) => acc += c, 0) :
        Math.max(...nums)
};

const nums = [1,2,3,4,5];

console.log(maxSum(nums));
