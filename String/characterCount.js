const countChar = (string) => {
    let stringCountObj = {};
    
    for(let cur of string) {
        stringCountObj[cur] = (stringCountObj[cur] || 0) + 1;
    }
    return stringCountObj;
}

console.log(countChar('test g string'));