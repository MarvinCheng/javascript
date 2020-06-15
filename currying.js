//currying in es6
const pf = p => q => p + q;
const qf = p => q => r => p + q + r;
console.log(qf(1)(2)(3));

function add2(arg) {
    console.log("Add 2 start");
    let sum = arg;
    return function x(arg1) {
        console.log("x in Add 2 start");
        if (typeof arg1 === "undefined" && arg1 == null) {
            return sum;
        } else {
            sum = arg1 + arg;
            return add2(sum);
        }

    }
}

// this is better solution
function add(arg) {
    console.log("Add start");
    let sum = arg;
    return function x(arg1) {
        console.log('arg1', arg1);
        console.log("X in add start");
        if (arg1 === undefined) {
            return sum;
        } else {
            sum += arg1;
            return x;
        }

    }
}

function add4(arg){
    let sum = arg;
    return function x(arg1){
        if(arg1){
            sum += arg1;
            return x;
        }
        else{
            return sum;
        }

    }
}

console.log("add 4 " ,add4(1)(2)());

function add3(arg) {
    return function (arg1) {
        return arg + arg1;
    }
}

// console.log(`add3 ${add3(1)(2)}`);
console.log(`add2 ${add(2)(3)(4)(10)()}`);
console.log(`add22 ${add(2)(3)(4)()}`);


// javascript primitive pass by value, non-primitive pass by reference!!!
let o = 10;
let p = o;
o = 5;
console.log(o, p);
//
// console.log([10] === [10]);
// console.log(10 === 10);
// console.log("A" === "A");
//
// function aprototype() {
//     this.a = "A";
// }
//
// aprototype.prototype.add = function () {
//     return this.a;
// }
// let aproInst = new aprototype();
// console.log(aproInst.add());
// let aobj = {"a": 1};
// let bobj = aobj;
// let cobj = Object.create(aobj);
// console.log(cobj.a);
// console.log(cobj);
// aobj["b"] = 2;
// console.log(aobj === bobj);
// console.log(aobj, bobj);
