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


// 实现
// newAdd(1); 	// 1
// newAdd(1)(2);  	// 3
// newAdd(1)(2)(3)；  // 6
// newAdd(1)(2, 3);   // 6
// newAdd(1, 2)(3);   // 6
// newAdd(1, 2, 3);   // 6
// 的function
function newAdd(){
    let args = [...arguments];
    let addfun = function(){
        args.push(...arguments);
        return addfun;
    };
    addfun.toString = function(){
        return args.reduce((a,b)=>{
            return a + b;
        });
    };
    return addfun;
}
console.log(`${newAdd(1)}`);
console.log(`${newAdd(1)(2)}`);
console.log(`${newAdd(1)(2)(3)}`);
console.log(`${newAdd(1)(2,3)}`);
console.log(`${newAdd(1,2)(3)}`);
console.log(`${newAdd(1,2,3)}`);


let arr = [
    { id: 1 },
    { id: 2, pid: 1 },
    { id: 3, pid: 2 },
    { id: 4, pid: 1 },
    { id: 5, pid: 3 },
    { id: 6, pid: 2 },
    { id: 6, pid: 2 },
    { id: 2, pid: 1 }
];
// 第 125 题：如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）
// 转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重）
function convertObject(arr){
    const result = [];
    const map = arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
    }, {});
    for(const obj of Object.values(map)){
        if(!obj.pid){
            result.push(obj);
        } else {
            const parent = map[obj.pid];
            parent.child = parent.child || [];
            parent.child.push(obj);
        }
    }
    return result;
}


console.log(convertObject(arr));

function wait() {
    return new Promise(resolve =>
        setTimeout(resolve, 10 * 1000)
    )
}

// x, y, z 一起跑async, await是在等x y z 跑完
// 所以总共花的时间是10s
// 如果是 const x = await wait(); const y = await wait(); const z = await wait();的话就是30秒
async function main() {
    console.time();
    const x = wait();
    const y = wait();
    const z = wait();
    await x;
    await y;
    await z;
    console.timeEnd();
}
main();

setTimeout(function run(){
    console.log('running run function');
    setTimeout(run, 1000);
});
