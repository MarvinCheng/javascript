const checkVowels = str => {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i in str.replace(/\W/g, "").toLowerCase()) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

const vowelsRegex = string => {
    matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(checkVowels("hello world"));
console.log(vowelsRegex("hello world"));