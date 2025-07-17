const divideArray = function(nums) {
    //check if nums length is even
    if(nums.length % 2 !== 0) {
        return false
    }

    let countMap = new Map();

    for(let item of nums) {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    }

      for(let item of countMap.values()) {
        if (item % 2 !== 0) {
            return false;
        }
    }
    return true;

}

console.log(divideArray([3,2,3,2,2,2]));