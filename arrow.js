const x = x => y => {x + (y != undefined ? y : 0)};
const x2 = function (x) {
    return function (y) {
        return x + y;
    }
}
console.log(x(2)(3));
console.log(x(2)());
console.log(x(2)(4));
console.log(x2(2)(3));
