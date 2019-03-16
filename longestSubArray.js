var lengthOfLongestSubstring = function (s) {
    let array = s.split("");
    let max = 0;
    if (array.length === 1) {
        return array.length;
    }
    let j = 0;
    let arr = [];
    while (j < array.length) {
        if (!arr.includes(array[j])) {
            arr.push(array[j]);
        } else {
            arr = arr.slice(arr.indexOf(array[j]) + 1);
            arr.push(array[j]);
        }
        max = arr.length > max ? arr.length : max;
        j++;
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring(" "));