let a = "test test test";
console.log(...a);

console.log([...a]);

const x = (param) => console.log(param);

// 这个会print一个array
x([...a]);

// 这个会print 第一个 character
x(...a);

// 这个会print 一个string
x(a);

const y = (param) => console.log(param);

console.log(...a);

//spread 如果parameter 对不上的话拿不到的variable是undefined
const sum = (x, y, z, l) => {
    console.log(x, y, z, l);
    return x + y + z + l;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
const sum2 = (x, y, z) => {
    console.log(x, y, z);
    return x + y + z;
}
console.log(sum2(...numbers));

console.log(...numbers);

var c = [[1], [2], [3]];
var d = [...c];
console.log(d);

// rest 是从很多个variables组成一个array
const sumRest = (...args) => {
    return args.reduce((prev, curr) => {
        return prev + curr;
    });
}

const s = (...args) => console.log(args);
console.log(sumRest(1, 2, 3, 4, 5));
console.log(s(1,2,"A",4,5));

let str = "I AM Marvin";
 console.log(...str); // string -> characters
 console.log([...str]); // string -> array

let arr = [1,2,3,4,5];
console.log(...arr); // arr -> string
console.log([...arr]); // arr -> arr
