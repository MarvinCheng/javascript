// Given an integer array arr, count element x such that x + 1 is also in arr.
//
// 	If there're duplicates in arr, count them separately.
//
//
//
// Example 1:
//
// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// 	Example 2:
//
// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:
//
// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
// 	Example 4:
//
// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.
//
//
// 	Constraints:
//
// 1 <= arr.length <= 1000
// 0 <= arr[i] <= 1000
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
	arr = arr.sort((a, b) => a -b);
	let result = 0;
	let count = 1;
	for(let i = 0, j = 1; i < arr.length - 1; i++, j++) {
		if (arr[i] !== arr[j]){
			if(arr[j] === arr[i] + 1){
				result += count;
			}
			count = 1;
		} else {
			count++;
		}
	}
	return result;
};

// console.log(countElements([1,2,3])); // 2
// console.log(countElements([1,1,2,3])); // 3
// console.log(countElements([1,1,2,2])); // 2
// console.log(countElements([1,3,2,3,5,0])); // 3
// console.log(countElements([1,1,3,3,5,5,7,7])); // 0
// console.log(countElements([2,9,0,7,6,2,7,7,0])); // 1
console.log(countElements([4,10,11,11,1,9,6,2,4,5,8])); // 7

