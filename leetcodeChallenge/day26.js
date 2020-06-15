// Given two strings text1 and text2, return the length of their longest common subsequence.
//
// 	A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
//
//
//
// 	If there is no common subsequence, return 0.
//
//
//
// Example 1:
//
// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:
//
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:
//
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
//
//
// Constraints:
//
// 	1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function(text1, text2) {
// 	let length = 0;
// 	let longestText = text1.length >= text2.length? text1: text2;
// 	let secondText = [...text1.length >= text2.length? text2: text1];
// 	let queue = [...longestText];
// 	let i=0;
// 	while(queue.length){
// 		console.log(secondText[i], queue[i]);
// 		if(secondText[i] === queue[i]){
// 			length++;
// 			secondText.shift();
// 			queue.shift();
// 		}
// 	}
// 	return length;
// };



function longestCommonSubsequence(text1, text2) {
	// create dp array of size text1+1 x text2+1 filled w/ zeros
	// dp= Array[text1+1][text2+1]
	const dp = [
		...Array(text1.length + 1),
	].map((e) => Array(text2.length + 1));
	// iterate i by j
	for (let i = 0; i <= text1.length; i++) {
		// loop text2, 找text1[i]有没有在 text2
		for (let j = 0; j <= text2.length; j++) {
			// if this is first row, make it a 0 (impossible to have substring here)
			if (i === 0 || j === 0) {
				dp[i][j] = 0;
			}
			// text2[j-1] === text1[i-1], dp[i][j] = dp[i-1][j-1] +1; (拿左上角的+1)
			else if (text1.charCodeAt(i - 1) === text2.charCodeAt(j - 1)) {
				// last characters match in both strings,
				// so this is a value substring, take length from last (if any)
				// and add 1
				dp[i][j] = dp[i - 1][j - 1] + 1;
			}
			else {
				// take max of top or left (longer substring)
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	// result is in bottom right cell
	return dp[text1.length][text2.length];
}
console.log(longestCommonSubsequence("abcde", "ace"));
// console.log(longestCommonSubsequence("abc", "abc"));
// console.log(longestCommonSubsequence("abc", "def"));
// console.log(longestCommonSubsequence("psnw", "vozsh"));
