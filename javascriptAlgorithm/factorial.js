const factorial = number => {
    let sum = 1;
    for (let i = number; i > 0; i--) {
        sum *= i;
    }
    return sum;
}


const _factorial = number => {
    return number < 2 ? 1 : number * _factorial(number-1);
}
console.log(factorial(5));
console.log(_factorial(5));
console.log(factorial(10));
console.log(_factorial(10));