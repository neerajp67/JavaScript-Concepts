/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let n = Math.ceil(nums.length / 2);
    let maxElement = nums[0];

    const map = new Map();

    for (let i = 1; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if (map.get(nums[i]) && map.get(nums[i]) > n) {
            maxElement = nums[i];
            return maxElement;
        }
    }
    return maxElement;
};

const nums = [1, 2, 2]
console.log((majorityElement(nums)));
