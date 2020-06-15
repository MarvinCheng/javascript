// Write an algorithm to determine if a number is "happy".
//
// 	A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//
// 	Example:
//
// Input: 19
// Output: true
// Explanation:
// 	1² + 9² = 82
// 8² + 2² = 68
// 6² + 8² = 100
// 1² + 0² + 0² = 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	try {
		return calculateHappy([...n.toString()]);
	} catch(ex) {
		return false;
	}
};

function calculateHappy(numbers){
	let result = 0;
	numbers.reduce((acc, num, idx) => {
		acc += Number(num)**2;
		if(idx == numbers.length -1){
			result = acc == 1? acc : calculateHappy([...acc.toString()]);
		} else {
			return acc;
		}
	}, 0);
	return result;
}

console.log(isHappy(19));
console.log(isHappy(2));


var bestAnswerIsHappy = function(n) {
	let seen = new Set();
	let current = n;

	while(true) {
		current = String(current).split('').reduce((acc, number) => (acc + Number(number)**2), 0)
		if(current === 1) {
			return true;
		} else if(seen.has(current)) {
			return false;
		} else {
			seen.add(current)
		}
	}
};
