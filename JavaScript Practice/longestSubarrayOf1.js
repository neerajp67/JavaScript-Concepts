/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let max = 0;
    let left = 0;
    let right = 0;
    let zeros = 0;

    while (right < nums.length) {
        // if 0 is found increment zeros count
        if (nums[right] === 0) {
            zeros++;
        }

        //if zeros count is more than 0, it means we can no longer get additional 1s after removing 0
        // more left pointer to right
        while (zeros > 1) {
            if (nums[left] === 0) zeros--;
            left++;
        }
        max = Math.max(max, right - left);
        right++;
    }
    return max;
};

const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
log(longestSubarray(nums));