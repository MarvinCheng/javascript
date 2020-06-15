// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.
//
// 	Example 1:
//
// Input: [5,7]
// Output: 4
// Example 2:
//
// Input: [0,1]
// Output: 0
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
	// let's say m = 5, n = 7, m= 101, n = 111.
	let count = 0;
	// in the while loop, we cut off the different bits between 101 and 111,
	// which is the right 2 bits in this case.
	// so when m !== n, shift right by 1.
	// in the end we will get the same number (same bits of 1),
	// and count is how many times we have shifted.
	while(m !== n){
		m >>= 1;
		n >>= 1;
		count++;
	}
	// when we got the same m and n value, shift left by count to append trailing zero
	// in this case, m = 1, count = 2,
	// so result will be 100 (4)
	return m <<=count;
};


// console.log(rangeBitwiseAnd(5,7));
// console.log(rangeBitwiseAnd(0,1));
console.log(rangeBitwiseAnd(26,30));
