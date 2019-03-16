//return the character that appears the most

//if only return max length
const maxLength = string => {
    const array = [...string.replace(/ /g, "")];
    let obj = {};
    let max = 0;
    for (let i of array) {
        obj[i] = obj[i] + 1 || 1;
        if (obj[i] > max) {
            max = obj[i];
        }
    }
    return max;
}

const maxCharacter = string => {
    const array = [...string.replace(/ /g, "")];
    const obj = {};
    let max = 0;
    let res = {};
    let maxChar = null;
    for (let i of array) {
        obj[i] = obj[i] + 1 || 1;
        max = Math.max(obj[i],max);
    }
    for (let i in obj) {
        if (obj[i] > max) {
            max = obj[i];
            maxChar = i;
        }
    }
    return maxChar;
}

console.log(maxCharacter("what if we rewrite the stars"));
console.log(maxLength("whataaa if we rewrite the stars"));
//
// var map = new Map();
// map.set("a",1);
// map.set("b",2);
// var obj = {};
// obj["a"]=1;
// obj["b"]=2;
// console.log(JSON.stringify(map));
// console.log(JSON.stringify(obj));


function mul(a, b) {
    console.log("a ", a);
    console.log("b ", b);
    return a * b;
}

//partial create a new function by fixing some parameters of the existing one.
let double = mul.bind(null, 2);
console.log(double(3));


let a;
if (a) {
    console.log("A");
}

const func = string => ({
    foo: 1
});
let b = func("C");
console.log(b);
// let c = new func("D"); => this will get error since arrow function does not support new
//destructuring
function desc() {
    return [1, 2, 3];
}

let [e, f, g] = desc();
console.log(e, f, g);

function descObj() {
    return {x: 5, y: 6, z: 7};
}

//destructuring object. {source(from the function):target(new variable)}
let {x: x1, y: x2, z: x3} = descObj();
console.log(x1, x2, x3);

//open a new class and extends built in javascript objects
// another way to extends built in javascript objects is add in prototype
// eg Array.prototype.shuffle = function(){ } => add shuffle into Array
class newArray extends Array{
    constructor(){
        super();
    }

    concat(string){

        return super.concat(string) + "12345";
    }
}

let newArr= new newArray();
let l = newArr.concat("12345");
console.log(l);