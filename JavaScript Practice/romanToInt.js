/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const ROMAN = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let number = 0;
    let i = 0;
    
    while (i < s.length) {
        let curr = ROMAN[s[i]];
        let next = i + 1 < s.length ? ROMAN[s[i + 1]] : 0;
        if (curr < next) {
            number -= curr;
        } else {
            number += curr;
        }
        i++
    }

    return number;
};