// You have a queue of integers, you need to retrieve the first unique integer in the queue.
//
// 	Implement the FirstUnique class:
//
// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// 	int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// 	void add(int value) insert value to the queue.
//
//
// 	Example 1:
//
// Input:
// 	["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
// 		[[[2,3,5]],[],[5],[],[2],[],[3],[]]
// Output:
// 	[null,2,null,2,null,3,null,-1]
//
// Explanation:
// 	FirstUnique firstUnique = new FirstUnique([2,3,5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5);            // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1
//
// Example 2:
//
// Input:
// 	["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
// 		[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
// Output:
// 	[null,-1,null,null,null,null,null,17]
//
// Explanation:
// 	FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
// firstUnique.showFirstUnique(); // return -1
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
// firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
// firstUnique.showFirstUnique(); // return 17
//
// Example 3:
//
// Input:
// 	["FirstUnique","showFirstUnique","add","showFirstUnique"]
// 		[[[809]],[],[809],[]]
// Output:
// 	[null,809,null,-1]
//
// Explanation:
// 	FirstUnique firstUnique = new FirstUnique([809]);
// firstUnique.showFirstUnique(); // return 809
// firstUnique.add(809);          // the queue is now [809,809]
// firstUnique.showFirstUnique(); // return -1
//
//
//
// Constraints:
//
// 	1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^8
// 1 <= value <= 10^8
// At most 50000 calls will be made to showFirstUnique and add.
/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
	this.set = new Map();
	this.unique = nums[0];
	nums.forEach((num)=>{
		this.add(num);
	});
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
	return this.unique;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
	let existing=0;
	if(this.set.has(value)){
		existing = this.set.get(value);
		this.set.delete(value);
		if(this.unique === value){
			this.unique = -1;
		}
	} else if(this.unique===-1){
		this.unique=value;
	}
	if(this.set.get(this.set.keys().next().value) === 1){
		this.unique=this.set.keys().next().value;
	}
	this.set.set(value, existing +1);
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
//
var obj = new FirstUnique([2,3,5]);
console.log(obj.showFirstUnique());
console.log(obj.set);
obj.add(5);
console.log(obj.showFirstUnique());
obj.add(2);
console.log(obj.showFirstUnique());
obj.add(3);
console.log(obj.showFirstUnique());

//
// ["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
// 	[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
// [null,-1,null,null,null,null,null,17]
// var obj = new FirstUnique([7,7,7,7,7,7]);
// console.log(obj.set);
// console.log(obj.showFirstUnique());
// console.log(obj.unique);
// obj.add(7);
// console.log(obj.set);
// console.log(obj.unique);
// obj.add(3);
// console.log(obj.set);
// console.log(obj.unique);
// obj.add(3);
// console.log(obj.set);
// console.log(obj.unique);
// obj.add(7);
// console.log(obj.set);
// console.log(obj.unique);
// obj.add(17);
// console.log(obj.set);
// console.log(obj.showFirstUnique());
