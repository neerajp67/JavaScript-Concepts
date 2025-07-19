/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = 0;
    for (const num of nums) {
        if (num != nums[j]) {
            j += 1;
            nums[j] = num;
        }
    }
    return j + 1;
};

const arr = [1, 1, 2];

console.log(removeDuplicates(arr));
