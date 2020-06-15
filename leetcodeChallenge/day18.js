// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
//
// 	Note: You can only move either down or right at any point in time.
//
// 	Example:
//
// Input:
// 	[
// 		[1,3,1],
// 		[1,5,1],
// 		[4,2,1]
// 	]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	var minSum = 0;

	// Only one path
	if(grid.length ===1 || grid[0].length ===1){
		const arrSum = array =>
			array.reduce(
				(sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1), 0);
		minSum = arrSum(grid);
	}
	else{
		for(let r = 1; r < grid.length; r++){
			grid[r][0] += grid[r-1][0];

			for(let c = 1;c < grid[0].length;c++){
				grid[0][c] += grid[0][c-1];

				grid[r][c] += Math.min(grid[r-1][c],grid[r][c-1]);
				minSum = grid[r][c];
			}
		}
	}

	return minSum;
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
