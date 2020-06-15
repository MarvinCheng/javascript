// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// 	Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// 	Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let smallest_sum = 0, max_so_far = Number.MIN_SAFE_INTEGER, max_ending_here = 0;
	for (let i = 0; i < nums.length; i++) {
		max_ending_here = max_ending_here + nums[i];
		if (max_so_far < max_ending_here){
			max_so_far = max_ending_here;
		}
		if (max_ending_here < 0){
			smallest_sum = max_ending_here;
			max_ending_here = 0;
		}
	}
	if(smallest_sum < 0 && max_so_far === Number.MIN_SAFE_INTEGER){
		return Math.max(...nums);
	}
	return max_so_far;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-2, -1]));
