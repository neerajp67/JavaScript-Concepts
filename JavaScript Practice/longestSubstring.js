/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0;

    const charMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }
        
        charMap.set(char, right);
        
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

const s = "dvdf";
console.log(lengthOfLongestSubstring(s));
