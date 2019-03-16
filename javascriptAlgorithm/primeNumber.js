// 用 Sieve of Eratosthenes 来得到prime number
// 这个theory 的解释 :Make a list of all the integers less than or equal to n (and greater than one). Strike out the multiples of all primes less than or equal to the square root of n, then the numbers that are left are the primes
// 首先我们set array(number+1), fill to true, then loop till i <=Math.sqrt(number)
// and write another loop to strike out the possible number where i*j<=number, j=2 and ++;
const primes = number => {
    const numbers = new Array(number + 1);
    numbers.fill(true);
    //number[0] and number[1] set to false since 0 and 1 is not included in prime number;
    numbers[0] = numbers[1] = false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        //j=2 because i is prime number, and the calculation starts on the second index
        for (let j = 2; i * j <= number; j++) {
            numbers[i * j] = false;
        }
    }

    //用reduce 取只有true的array index
    return numbers.reduce(
        (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
        []
    );
};


console.log(primes(10));

for (let i = 0; i > 1; i++) {
    console.log("123");
}