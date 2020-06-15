// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
//
// Example:
//
// 	Input:
//
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
//
// Output: 4
/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function(matrix) {
	if (!matrix.length) return 0;
	let dp = new Array(matrix.length+1).fill(0).map(()=>new Array(matrix[0].length+1).fill(0));
	let max = 0;
	for (let r=1;r<dp.length;r++) {
		for (let c=1;c<dp[0].length;c++) {
			// 如果左上的value是0的话就不需要跑, 因为左上角的号码如果是0就不会有square
			if (matrix[r-1][c-1]!=0) {
				// 找左上，左边，还有上面的value, dp[r][c] = 这些value的min + 1
				dp[r][c] = Math.min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1])+1;
				max = Math.max(dp[r][c], max);
			}
		}
	}
	return max**2;
};

console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","1","1","1"]]));
