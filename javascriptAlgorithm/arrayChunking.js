const chunk = (array, size) => {
    let result = [];
    for (let i of array) {
        // result[result.length-1] returns undefined in the first place
        // where result is an empty array
        const lastChunk = result[result.length - 1];
        if (!lastChunk || lastChunk.length === size) {
            result.push([i]);
        } else {
            lastChunk.push(i);
        }
    }
    return result;
}

console.log(chunk([1, 2, 3, 4], 2));

let arr = "aba".split("");

console.log(Math.floor(10/arr.length));