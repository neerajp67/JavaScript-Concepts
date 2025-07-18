const checkAnagram = (str1, str2) => {
    
    const cleanedStr1 = str1.replace(/\s+/g, "").split('').sort().join('');
    const cleanedStr2 = str2.replace(/\s+/g, "").split('').sort().join('');

    if (cleanedStr1.length !== cleanedStr2.length) return false

    return cleanedStr1 == cleanedStr2;
}

console.log(checkAnagram('hello world', 'wordl    lloeh'));

