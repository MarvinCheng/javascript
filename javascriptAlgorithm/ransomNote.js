const magazine =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const ransomNote = (words, magazine) => {
    let magazineArr = magazine.split(" ");
    let wordsArr = words.split(" ");
    let magazineObj = {};
    magazineArr.forEach((val) => {
        magazineObj[val] = magazineObj[val] + 1 || 1;
    });
    let result = true;
    wordsArr.forEach((word) => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) {
                result = false;
            }
        } else {
            result = false;
        }
    });
    return result;
}

const ransomNote2 = (note, magazine) => {
    const magazineWords = magazine.split(" ");
    const magazineHash = {};

    magazineWords.forEach(word => {
        if (!magazineHash[word]) magazineHash[word] = 0;
        magazineHash[word]++;
    });

    const noteWords = note.split(" ");
    let possible = true;

    noteWords.forEach(word => {
        if (magazineHash[word]) {
            magazineHash[word]--;
            if (magazineHash[word] < 0) possible = false;
        } else possible = false;
    });

    return possible;
};

console.log(ransomNote("sit ad est sint", magazine));
console.log(ransomNote("sit ed est sint", magazine));
console.log(ransomNote("sit ad est sint in in", magazine));
console.log(ransomNote("sit ad est sint in in in in", magazine));