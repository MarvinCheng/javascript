// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
//
// 	Example 1:
//
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// 	Example 2:
//
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// 	Example 3:
//
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// 	Example 4:
//
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// 	Note:
//
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
	let s = S.split('');
	let t = T.split('');
	let max = Math.max(s.length, t.length);
	for (let i=0; i<max; i++){
		if(s[i]){
			if(s[i] === '#'){
				let j = i-1;
				while(s[j] === ''){
					j--;
				}
				if(i !== 0){
					s[j] = '';
				}
				s[i] = ''
			}
		}
		if(t[i]){
			if(t[i] === '#'){
				let j = i-1;
				while(t[j] === ''){
					j--;
				}
				if(i !== 0){
					t[j] = '';
				}
				t[i] = ''
			}
		}
	}
	return s.join('') === t.join('');
};


var backspaceCompareNew = function(S,T){
	const s = resolve(S), t = resolve(T);
	return s===t;
};
const resolve = function(str){
	let stack = [];
	for (let a of str){
		if(a === '#'){
			stack.pop();
		} else {
			stack.push(a);
		}
	}
	return stack.join('');
};

console.log(backspaceCompareNew("ab#c","ad#c")); // true
console.log(backspaceCompareNew("#ab#c","#ad#c")); // true
console.log(backspaceCompareNew("a#c","b")); // false
console.log(backspaceCompareNew("a##c","#a#c")); // true
console.log(backspaceCompareNew("ab##", "c#d#")); // true

