/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
    let count = 0;

    const unique = nums.filter((v, i, ar) => ar[i] !== ar[i+1]);
    let i = 0;

    i = 1;
    while (i < unique.length - 1) {
        if ((unique[i] > unique[i - 1] && unique[i] > unique[i + 1]) || (unique[i] < unique[i - 1] && unique[i] < unique[i + 1])) {
            count++;
        }
        i++;
    }
    return count;
};

const nums = [5, 7, 7, 1, 7];

console.log(countHillValley(nums));
