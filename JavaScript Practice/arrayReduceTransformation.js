/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(!nums.length) return init;
    let val = init;
    for(let n of nums) {
        val = fn(val, n);
    }
    return val
};
const nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr; }, init = 0
console.log(reduce(nums, fn, init)) 