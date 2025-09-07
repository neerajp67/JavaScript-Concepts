/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
   const newArr = [];
   arr.forEach((item, index) => {
    newArr.push(fn(item, index));
   });
   return newArr
};

const arr = [1,2,3];
const fn = function plusone(n) { return n + 1; }

console.log(map(arr, fn));