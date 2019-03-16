const countPrimes = numbers => {
    let res = new Array(numbers);
    res.fill(true);
    res[0] = res[1] = false;
    for (let i = 2; i < Math.sqrt(numbers); i++) {
        for (let j = 2; i * j <= numbers; j++) {
            res[i * j] = false;
        }
    }

    let len = res.filter(i => i === true);
    return len.length;
}

console.log(countPrimes(10));
console.log(countPrimes(2));