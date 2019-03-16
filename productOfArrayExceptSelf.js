/* Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

    Example:

Input:  [1,2,3,4]
Output: [24,12,8,6] */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        console.log("I " + i);
        console.log("Result " +result[i]);
        console.log("Num " +nums[i]);
        productSoFar *= nums[i]
        console.log("Product " +productSoFar);
    }
    productSoFar = 1
    console.log("Result 1 " + result.toString());
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        console.log("J " + j);
        console.log("Result " +result[j]);

        productSoFar *= nums[j]
        console.log("Num " +nums[j]);
        console.log("Product " +productSoFar);
    }
    return result;
};

// console.log(productExceptSelf([1, 0]));
console.log(productExceptSelf([1,2,3,4]));

