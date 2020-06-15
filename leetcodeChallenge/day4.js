// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Example:
//
// 	Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:
//
// 	You must do this in-place without making a copy of the array.
// 	Minimize the total number of operations.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let end = nums.length - 1;
	let pointer1 = 0;

	while(pointer1 < end){
		if(nums[pointer1] === 0){
			nums.push(0);
			nums.splice(pointer1, 1);
			end--;
		} else {
			pointer1++;
		}
	}
};

console.log(moveZeroes([0,1,0,3,12]));


var moveZeroes = function(nums) {
	let next_nonzero = 0;
	for(let i = 0; i < nums.length; ++i) {
		if (nums[i] != 0) {
			nums[next_nonzero] = nums[i];
			++next_nonzero;
		}
	}
	nums.fill(0, next_nonzero);
};
