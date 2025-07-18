/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    //merge array
    const mergedArr = [...nums1, ...nums2]

    //sort array
    mergedArr.sort((a, b) => a - b);

    const length = mergedArr.length;
    const midPoint = length / 2;

    if (length % 2 === 0) {
        return (mergedArr[midPoint] + mergedArr[midPoint - 1]) / 2;
    }
    return (mergedArr[Math.floor(midPoint)]);
};


const arr1 = [1,2,3,4,5];
const arr2 = [7,8,9];

// 2,2,2,2,2,4,4,4,4

console.log(findMedianSortedArrays(arr1, arr2));
