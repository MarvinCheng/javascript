const twoSum = (array, sum) => {
    let store = [];
    let result = [];

    //iterate array 的时候,会算num2的value. 如果num2不在store里面的话就把num1 push进store
    // 在iterate的时候再变例 num2有没有在store里面,有的话就代表num1+num2 = sum. 然后把[num1,num2] push
    // to result
    for (let num1 of array) {

        const num2 = sum - num1;
        if (store.indexOf(num2) !== -1) {
            result.push([num1, num2]);
        }
        store.push(num1);
    }
    return result;
}
//twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]
console.log(twoSum([1, 2, 2, 3, 4], 4));
console.log(twoSum([1, 2, 2, 3, 4], 3));


var twoSum2 = function(nums, target) {
    let obj = {};
    for(let i=0; i<nums.length; i++){
        let num2 = target - nums[i];
        if(obj[num2]!==undefined){
            return [obj[num2], i];
        }
        else {
            obj[nums[i]] = i;
        }
    }

};

// console.log(twoSum2([3,2,4],6));
console.log(twoSum2([2,7,11,15],9));
