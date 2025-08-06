/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {

    let count = 1;
    let ans = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count < 3) {
            ans += s[i];
        }
    }
    return ans;

};

const s = "aaabaaaa";
console.log(makeFancyString(s)); // Output: "leetcode"