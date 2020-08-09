function _new(fn, ...arg) {
	const obj = Object.create(fn.prototype);
	const ret = fn.apply(obj, arg);
	// 这里要查 ret 而不是直接return obj是因为 constructor可能会return object
	// 如果constructor return object的话就要return constructor的object， 不是return obj
	return ret instanceof Object ? ret : obj;
}


function Person(name){
	this.name = name;
	// 这里constructor就return了一个 person object， 如果没有return的话 ret就是undefined
	return {
		greeting: `My name is ${this.name}`,
	}
}

let a = _new(Person, 'hi');
console.log(a);
console.log(a.name);
console.log(new Person('hello'));


function _new2(fn, ...args){
	console.log(...args);
	const obj = Object.create(fn.prototype);
	const ret = fn.apply(obj, args);
	return ret instanceof Object ? ret: obj;
}


// let b = _new2(Person, "hi", 12);
// console.log(b);

console.log(a instanceof Object);
let c = 1;
console.log(c instanceof Number);
console.log(typeof c);

let d = '1';
console.log(d instanceof String);
console.log(typeof d);

// Original:
// for (var i = 0; i< 10; i++){
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 1000)
// }
// solutions to print 0-9, instead of 10
for (let i = 0; i< 10; i++){
	((i)=>{
		setTimeout(() => {
			console.log(i);
		}, 1000);
	})(i);
}

var b = 10;
(function b() {
	b = 20;
	console.log(b)
})();
// console.log 出来的是 function b, 因为b=20指去的是var b, 也就是window object. console.log 会找最靠近的object，也就是function b

(function b() {
	var b = 20;
	console.log(b) // 这个就是console log 20
})();

(function b(b) {
	b.b = 20;
	console.log(b) // 这个就是console log 10
})(b);

var arr=[1,2,3,[4,5],[6,[7,[8]]]]
function flatten(arr, result = []){
	for(let a of arr){
		if(Array.isArray(a)){
			flatten(a, result);
		} else{
			result.push(a);
		}
	}
	return result;
}

console.log(flatten(arr));


