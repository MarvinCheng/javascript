const countChar = str => {
    let strArr = str.replace(/\W/g, "").toLowerCase();
    let strObj = {};
    for (let i in strArr) {
        strObj[i] = strObj[1] + 1 || 1;
    }
    return strObj;
}

const anagrams = (str1, str2) => {
    const countChar1 = countChar(str1)
    const countChar2 = countChar(str2);
    if (Object.keys(countChar1).length !== Object.keys(countChar2).length) {
        return false;
    }
    for (let char in countChar1) {
        if (countChar1[char] !== countChar2[char]) {
            return false;
        }
        return true;
    }
};

console.log(anagrams("hello world", "world hello"));
console.log(anagrams("you shall not pass", "world hello"));
