/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let seenItems = new Map();

    while (i < nums.length) {
        let item = target- arr[i];
        if(seenItems.has(item)) {
            return [i, seenItems.get(item)]
        }
        seenItems.set(nums[i], i)
        i++;
    }

    return []
};

const arr = [3,2,4];
console.log(twoSum(arr, 6));