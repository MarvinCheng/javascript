// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
// 	Example:
//
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
//
// Note: Please solve it without division and in O(n).
//
// 	Follow up:
// 	Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	let ans = [];
	let after;
	let before = 0;
	let lastEl;
	const len = nums.length;
	ans[0] = nums[0];
	// 先从左边loop一次, 算product
	// [1,2,3,4]
	// ans[0] = 1
	// ans[1] = nums[1] * ans[0] = 2 * 1 = 2
	// ans[2] = nums[2] * ans[1] = 3 * 2 = 3 * (2 * 1) = 6, because ans[1] = 2 * 1
	// ans[3] = nums[3] * ans[2] = 4 * 6 = 4 * (3 * 2 * 1) = 24 because ans[2] = 3 * 2 * 1
	// ans = [1,2,6,24]
	for (let i = 1; i < len; i++) {
		ans[i] = nums[i] * ans[i - 1]
	}
	// 把 ans[2] 存起来， 因为 ans[2] 是最后一个product的value.
	// when i = 4, product = (3 * 2 * 1)
	lastEl = ans[len - 2];

	// after = nums[3] = 4
	after = nums[len - 1];

	// 右到左loop一次
	// when j=2, nums[2] = 3, product of 3 is (2 * 1 * 4);
	// before = ans[1] = 2 => before 代表的是 2 之前的product,
	// 也就是ans[1] => (2 * 1)

	// 这个是把3之前的product还有3之后的product multiply (4 * (2*1))
	// ans[2] = after * before = 4 * ans[1] = 4 * (2 * 1) = 8
	// 这里是把[3 * after], 也就是3*4,
	// 下个loop when  j=1的时候，nums[1] 后面的product就是after
	// after = nums[j] * after = nums[2] * 4 = 3 * 4 = 12

	// when j=1;
	// before = ans[0] = 1
	// ans[1] = after * before = 12 * 1 = (4 * 3) * 1 = 12
	// after = nums[j] * after = nums[1] * 12 = 2 * 12 = 24
	for (let j = len - 2; j > 0; j--) {
		before = ans[j - 1];
		ans[j] = after * before;
		after = nums[j] * after;

	}

	// 跑完了之后拿到的after就等于是(2*3*4),  也就是1的product
	ans[0] = after;
	// 最后一个product就是lastEl, 因为lastEl是(3*2*1)
	ans[len - 1] = lastEl;

	return ans;
};

console.log(productExceptSelf([1,2,3,4]));
