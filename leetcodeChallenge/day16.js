// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:
//
// 	Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// 	Any right parenthesis ')' must have a corresponding left parenthesis '('.
// 	Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// 	An empty string is also valid.
// 	Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// 	The string size will be in the range [1, 100].
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
	let numHash = [];
	if(s === "" || s === "*") {
		return true;
	}
	let leftParanthesis = [];
	for(let i=0; i<s.length; i++){
		if(s[i] === "("){
			// save i into leftParanthesis
			leftParanthesis.push(i);
		} else if (s[i] === "*"){
			numHash.push(i);
		}else {
			if(leftParanthesis.length > 0){
				// pop leftParanthesis if leftParanthesis is not empty
				leftParanthesis.pop();
			}
			else if(numHash.length > 0){
				// otherwise pop hash
				numHash.pop();
			} else {
				return false;
			}
		}
	}
	let i = leftParanthesis.length - 1;
	let j = numHash.length - 1;

	// compare the position of hash and position of leftParanthesis
	// if leftParanthesis is smaller than hash, pop both.
	while(leftParanthesis[i] < numHash[j]){
		leftParanthesis.pop();
		numHash.pop();
		i--;
		j--;
	}
	return leftParanthesis.length === 0;
};


console.log(checkValidString('()'));
console.log(checkValidString('(*)'));
console.log(checkValidString('(*))'));
console.log(checkValidString(')(*))'));
console.log(checkValidString('(*'));
console.log(checkValidString('*)'));
console.log(checkValidString('*()'));
console.log(checkValidString("(*()"));
