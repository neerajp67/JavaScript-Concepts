var applyOperations = function (nums) {

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }

    let nonZeroArr = nums.filter((num) => num !== 0);
    let zeroArr = nums.filter((num) => num === 0);

    nums = [...nonZeroArr, ...zeroArr]
    return nums

};

console.log(applyOperations([847,847,0,0,0,399,416,416,879,879,206,206,206,272]))


// method 2
// var applyOperations = function (nums) {

//     let nonZeroArr = [];
//     let zeroArr = []
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] == nums[i + 1] && nums[i]) {
//             nums[i] = nums[i] * 2;
//             nums[i + 1] = 0;
//             nonZeroArr.push(nums[i]);
//             zeroArr.push(nums[i + 1]);
//         } else if (nums[i]) {
//             nonZeroArr.push(nums[i]);
//         } else {
//             zeroArr.push(nums[i]);
//         }

//     }

//     nums = [...nonZeroArr, ...zeroArr]
//     return nums
// };

// console.log(applyOperations([847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272]))

