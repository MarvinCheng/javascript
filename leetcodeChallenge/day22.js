// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
//
// 	Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// 	The length of the array is in range [1, 20,000].
// 	The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
	const seen = new Map();
	let cnt = 0;
	let N = nums.length;
	let S = Array(N + 1).fill(0);
	for (let i = 1; i <= N; ++i)
		// 把全部的号码加起来放进S里面
		S[i] = S[i - 1] + nums[i - 1];
	for (let i = 0; i <= N; ++i) {
		let x = S[i],
			y = S[i] - k;
		// 找map里面有没有y，有的话cnt = seen.get(y)
		// 如果seen里面有y的话，就代表sum=k
		cnt += (seen.get(y) || 0);
		// 把x set进map里
		seen.set(x, 1 + (seen.get(x) || 0));
	}
	return cnt;
};


// console.log(subarraySum([1,1,1],2)); // 2
// console.log(subarraySum([1,2,3],3)); // 2
// console.log(subarraySum([1],1)); // 1
// console.log(subarraySum2([100,1,2,3,4],6)); // 1
// console.log(subarraySum([-1, -1, 1],0)); // 1

console.log(subarraySum([1,2,3,4,5,6,7,1,23,21,3,1,2,1,1,1,1,1,12,2,3,2,3,2,2],6)); // 5
