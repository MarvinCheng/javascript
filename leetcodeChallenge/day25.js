// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
// 	Each element in the array represents your maximum jump length at that position.
//
// 	Determine if you are able to reach the last index.
//
// 	Example 1:
//
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// 	Example 2:
//
// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
// jump length is 0, which makes it impossible to reach the last index.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
// 	let goal = nums.length - 1, idx = nums.length - 1, distance = 0;
// 	while (0 <= --idx) {
// 		if (goal - idx <= nums[idx] + distance) {
// 			distance = goal - idx;
// 		}
// 	}
// 	return distance + 1 === nums.length;
// };

const canJump = (nums) => {
	// this is the biggest jump we can make
	let max = 0;
	// iterate thru nums
	for (let i = 0; i < nums.length; i++) {
		// set new max jump to be current max or i + jump size
		console.log(1, i+nums[i]);
		max = Math.max(max, i + nums[i]);
		console.log(2, max);
		// if we hit a 0 jump and our max can't cross this, break
		if (nums[i] === 0 && max <= i)
			break;
	}
	// check if our max jump we have can reach the end
	return max >= nums.length - 1;
}



// console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
// console.log(canJump([2,0]));
// console.log(canJump([4,2,0,0,1,1,4,4,4,0,4,0]));
// console.log(canJump([1,2,0,1]));
// console.log(canJump([1,1,1,0]));
// console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]));
