// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
//
// 	Example:
// Given a binary tree
//     1
// 	  / \
//   2   3
//  / \
// 4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
//
// 	Note: The length of path between two nodes is represented by the number of edges between them.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
	if (root == null) {
		return 0;
	}

	if (root.left == null && root.right == null) {
		return 0;
	}

	let ans = 0;

	const longPath = node => {
		if (node == null) {
			return -1;
		}

		const lPath = longPath(node.left) + 1;
		const rPath = longPath(node.right) + 1;

		// longest path pass through "node" using both left and right
		ans = Math.max(ans, lPath + rPath);

		// longest path section along the node
		return Math.max(lPath, rPath);
	};

	longPath(root);

	return ans;
};

// TreeNode {
// 	val: 1,
// 		left:
// 	TreeNode {
// 		val: 2,
// 			left: TreeNode { val: 4, left: null, right: null },
// 		right: TreeNode { val: 5, left: null, right: null } },
// 	right: TreeNode { val: 3, left: null, right: null } }
