// Given a non-empty binary tree, find the maximum path sum.
//
// 	For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
//
// 	Example 1:
//
// Input: [1,2,3]
//
//  	  1
// 		 / \
//      2   3
//
// Output: 6
// Example 2:
//
// Input: [-10,9,20,null,null,15,7]
//
// 	  -10
// 	  / \
//   9  20
// 	   /  \
//    15   7
//
// Output: 42
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
	let sum = root.val;
	const dfs = (node) => {
		if (!node) return 0;
		const left = Math.max(dfs(node.left), 0),
			right = Math.max(dfs(node.right), 0);
		sum = Math.max(left + right + node.val, sum);
		console.log(left,right, sum);
		return Math.max(left, right) + node.val;
	};
	dfs(root);
	return sum;
};

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
	 this.left = (left===undefined ? null : left)
	 this.right = (right===undefined ? null : right)
}


let root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(maxPathSum(root));
