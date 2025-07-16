var isValid = function (word) {
    let isvalidWord = false;
    if (word.length < 3) {
        return isvalidWord
    }
    const regex = /^[a-zA-Z0-9]*$/
    if (!regex.test(word)) {
        return isvalidWord
    }

    const vowelArr = ['a', 'e', 'i', 'o', 'u'];
    let isVowelIncludes = false;
    let isConsonantIncludes = false;


    for (let ch of word) {
        if (isVowelIncludes && isConsonantIncludes) {
            return true;
        }
        if (!isVowelIncludes && vowelArr.includes(ch.toLowerCase())) {
            isVowelIncludes = true;
            continue
        }
        if ((!isConsonantIncludes && isNaN(ch)) && !vowelArr.includes(ch.toLowerCase())) {
            isConsonantIncludes = true;
        }
    }
    isvalidWord = isVowelIncludes && isConsonantIncludes;

    return isvalidWord;
};

console.log(isValid('Uua8'))