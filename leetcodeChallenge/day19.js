// Search in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// 	Your algorithm's runtime complexity must be in the order of O(log n).
//
// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
// 	for(let i=0, j=nums.length-1; i<nums.length; i++,j--) {
// 		if(nums[i] === target){
// 			return i;
// 		} else if (nums[j] === target) {
// 			return j;
// 		}
// 	}
// 	return -1;
// };

var search = function(nums, target) {
	let leftIdx = 0;
	let rightIdx = nums.length - 1;

	while(leftIdx <= rightIdx) {
		let pivot = parseInt((leftIdx + rightIdx) / 2);
		let pivotVal = nums[pivot];
		if(pivotVal === target) {
			return pivot;
		} else {
			//non rotated on left
			if(nums[leftIdx] <= pivotVal) {
				if(pivotVal > target && target >= nums[leftIdx]) {
					rightIdx = pivot - 1;
				} else {
					leftIdx = pivot + 1;
				}
			} else {
				//no rotated on right
				if(pivotVal < target && target <= nums[rightIdx]) {
					leftIdx = pivot + 1;
				} else {
					rightIdx = pivot - 1;
				}
			}
		}
	}

	return -1;

};


console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([1,3,5], 3));
console.log(search([3,5,1], 5));

