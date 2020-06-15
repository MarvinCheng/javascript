// Given an array of strings, group anagrams together.
//
// 	Example:
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 	Output:
// [
// 	["ate","eat","tea"],
// 	["nat","tan"],
// 	["bat"]
// ]
// Note:
//
// 	All inputs will be in lowercase.
// 	The order of your output does not matter.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	let anagram = {};
	strs.forEach((str) => {
		let strArr = [...str].sort();
		if(!anagram[strArr]) {
			anagram[strArr] = [];
		}
		anagram[strArr].push(str);
	});
	return Object.values(anagram);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
