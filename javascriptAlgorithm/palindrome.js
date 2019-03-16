// string forward = string backward

const isPalindrome = string => {
    //process string first. make it same case, remove special character, white space
    let str = string.replace(/[!.? ]/g, "").toLowerCase();
    let reverse = str.split("").reverse().join("");
    return str === reverse;
}

console.log(isPalindrome("Cigar? Toss it in a can. It is so tragic"));

console.log(isPalindrome("sitad est love"));

// /\W/g => find whitespace
// /[!.? ]/g => find characters !.? and whitespace
