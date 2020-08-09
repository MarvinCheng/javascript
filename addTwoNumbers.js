/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = l1;
    let v1 = [];
    let v2 = [];
    console.log(head);
    while (head) {
        console.log("value " + head.val);
        v1.push(head.val);
        head = head.next;
    }
    head = l2;
    while (head) {

        console.log("value " + head.val);
        v2.push(head.val);
        head = head.next;
    }
    console.log(v1);
    console.log(v2);
    let s1 = v1.reverse().join("");
    let s2 = v2.reverse().join("");
    console.log(s1);
    console.log(s2);
    let res = Number(s1) + Number(s2);
    let s = "1234";
    console.log(s.split().reverse().join().toString());


};
let s = "1234";
// console.log(s.split("").reverse().join(""));
let a = [1, 2, 3, 4];
var foo = function (...args) {
    // console.log(...args);
};
foo(...a);


let name = "Kyle";
let greeting = `Hello ${name}`;

// console.log(greeting);

function upper(s) {
    return s.toUpperCase();
}

var who = "reader";
var text = `A very ${upper("warm")} welcome
to all of you ${upper(`${who}s`)}!`;

// console.log(text);

function* fibonacci() {
    var fn1 = 0;
    var fn2 = 1;
    while (true) {
        var current = fn1;
        console.log("fn1 " + fn1);
        console.log("fn2 " + fn2);
        fn1 = fn2;

        fn2 = current + fn1;
        console.log("fn1 " + fn1);
        console.log("fn2 " + fn2);

        var reset = yield current;
        console.log("current " + current);
        console.log("reset " + reset);
        if (reset) {
            console.log("a");
            fn1 = 0;
            fn2 = 1;
        }
    }
}

var sequence = fibonacci();
// console.log(sequence.next().value);     // 0
// console.log(sequence.next().value);     // 1
// console.log(sequence.next().value);     // 1
// console.log(sequence.next().value);     // 2
// console.log(sequence.next().value);     // 3
// console.log(sequence.next().value);     // 5
// console.log(sequence.next().value);     // 8
// console.log(sequence.next(true).value); // 0
// console.log(sequence.next().value);     // 1
// console.log(sequence.next().value);     // 1
// console.log(sequence.next().value);

function foo() {
    let x = "b";
    return "a" + x;
}

// console.log(foo());


var ap = new Map();

function hello() {
    return "Hello World";
}

var st = "Hello world";
for (let i of st) {
    let count = 1;
    if (ap.has(i)) {
        count = ap.get(i) + 1;
    }
    setMap(ap, i, count);
}

function setMap(target, source, value) {
    target.set(source, value);
}

for (let val, ret, it = ap[Symbol.iterator]();
     (ret = it.next()) && !ret.done;
) {
    val = ret.value;
    console.log( val );
}
let regex = /[aeiou]/gi;
let stArr = st.split("");
let unique_array = stArr.filter((elem, index, self) => {
    if ((index == self.indexOf(elem)) && regex.test(elem)){
        return elem;
    }
});
console.log(unique_array);

let apt = "Marvin";
function upper(s){
    return s.toUpperCase();
}
console.log(`${upper(`${apt}`)}`)

class B {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    print(){
        console.log(this.a,this.b);
    }
}
class A extends B{
    constructor(a,b,c){
        super(a,b);
        this.c = c;
    }
    print(){
        super.print();
        console.log(this.c);
    }
}
let inst = new A(1,2,3);
inst.print();

Number.prototype.add = function(n){
    return this.valueOf() + n;
};
Number.prototype.minus = function(n){
    return this.valueOf() - n;
};

(5).add(3).minus(2);
