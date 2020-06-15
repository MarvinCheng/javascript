// Return the root node of a binary search tree that matches the given preorder traversal.
//
// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)
//
//
//
// Example 1:
//
// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]
//
//
//
// Note:
//
// 	1 <= preorder.length <= 100
// The values of preorder are distinct.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
	if(preorder.length == 0){
		return null;
	}
	let root = new TreeNode(preorder[0]);
	if(preorder.length == 1){
		return root;
	}
	for (let i=1; i< preorder.length; i++){
			let newNode = new TreeNode(preorder[i]);
			insertNode(root, newNode);
	}
	return root;
};

function insertNode(node, newNode) {
	if(newNode.val < node.val) {
		if(node.left === null){
			node.left = newNode;
		} else {
			// 一直去跑知道找到node.left是null位置
			insertNode(node.left, newNode);
		}
	} else {
		if(node.right === null){
			node.right = newNode;
		} else {
			insertNode(node.right,newNode);
		}
	}
}

function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}


console.log(bstFromPreorder([8,5,1,7,10,12]));
// console.log(bstFromPreorder([1,3,2]));
// console.log(bstFromPreorder([3,1,2]));
// console.log(bstFromPreorder([7,20,19,12]));

