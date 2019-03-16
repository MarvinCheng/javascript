function reverseInt(integer) {
    //toString the integer, split into array, reverse then join to a string again.
    //then change to int and * the sign of the integer
    return parseInt(integer.toString().split("").reverse().join("")) * Math.sign(integer);
}

console.log(reverseInt(10000));

console.log(reverseInt(-123));

console.log(reverseInt(-2100));

console.log(reverseInt(-1200));

//
// function test(promises) {
//     let arr = [];
//     let fn;
//
//     promises.forEach(
//         p => {
//             console.log(p);
//             p => {
//                 console.log(p);
//                 arr.push(p);
//                 arr.length === 10 && fn(arr);
//             }
//         });
//     return new Promise(p => fn => r);
// }
//
// const p = p => q => p+q;
//
// // var p = function p(){
// //     return function q(){
// //         console.log(p);
// //     }
// // }
//
// // console.log(p(1000));
// console.log(p(1000)(4));
// let promise1 = Promise.resolve("1");
// let promise2 = Promise.resolve("2");
// let promise3 = Promise.resolve("3");
// let pArr = [promise1, promise2, promise3];
// console.log(test([1, 2, 3]));

// function p(l) {
//     console.log(...l);
//     console.log(...l.split(" "));
//     console.log(Math.max(...l.split(' ').map(s => s.length)));
// }
//
// p("I am marvin");