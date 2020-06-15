const fibonacci = number => {
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
const _fibonacci = element => element < 3 ? 1 : _fibonacci(element - 1) + _fibonacci(element - 2);

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(6));
// console.log(fibonacci(10));

console.log(_fibonacci(1));
console.log(_fibonacci(2));
console.log(_fibonacci(3));
console.log(_fibonacci(4));
console.log(_fibonacci(5));
console.log(_fibonacci(6));
console.log(_fibonacci(10));
