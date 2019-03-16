function reverse(string) {
    return string.split("").reverse().join("");
}

const reverseFor = string => {
    let result = "";
    for (let i of string.split("").reverse()) {
        result += i;
    }
    return result;
}

const reverseReduce = string => {
    let src = string.split("").reverse();
    let count = 0;
    let result = src.reduce((res, char) => {
        res += char;
        count++;
        return res;
    });
    console.log(count);
    return result;
}

const reverseLoop = string => {
    let start = 0;
    let arr = string.split("");
    let end = arr.length;
    let count = 0;
    for (let i = start, j = arr.length - 1; i < arr.length - 1; i++) {
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
            count++;
        }
    }
    console.log(count);
    return arr.join("");
}

console.log(reverse("Hello world!"));
console.log(reverseFor("Hello world!"));
console.log(reverseReduce("Hello world!"));
console.log(reverseLoop("Hello world!")); // loop only have to run half the size


let arr = [1, 2, 3, 4];
arr.map(i => console.log(i));