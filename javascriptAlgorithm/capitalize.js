const capitalize = str => {
    let arr = str.split("");
    for (let i in arr) {
        if (arr[i] === arr[0] || arr[i - 1] === " ") {
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join("");
}

console.log(capitalize("hello world"));
console.log(capitalize("you shall not pass"));
console.log(capitalize("123 123 123"));