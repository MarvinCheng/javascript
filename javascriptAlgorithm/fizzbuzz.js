//given a number,i = 1 to the number, if i %2, print "Fizz", %3 print "Buzz"
// if both divisible by 2 and 3 print "Fizz Buzz"
// if not print the number
const fizzbuzz = number => {
    let result = [];
    for (let i = 1; i < number; i++) {
        if (i % 6 == 0) {
            result.push("Fizz buzz");
        } else if (i % 2 == 0) {
            result.push("Fizz");
        } else if (i % 3 == 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log(fizzbuzz(20));

