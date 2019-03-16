const finobacci = number => {
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 1;
    for (let i = 3; i <= number; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[number];
}

// dynamic programming method
const _finobacci = element => element < 3 ? 1 : _finobacci(element - 1) + _finobacci(element - 2);

console.log(finobacci(1));
console.log(finobacci(2));
console.log(finobacci(3));
console.log(finobacci(6));
console.log(finobacci(10));

console.log(_finobacci(1));
console.log(_finobacci(2));
console.log(_finobacci(3));
console.log(_finobacci(6));
console.log(_finobacci(10));