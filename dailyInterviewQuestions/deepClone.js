let a = {a:'1',b: [1,2,3,4, {t: 'test'}], [Symbol()]: 'symbol', d: new Date(), r: RegExp("^\\d$")};

function deepClone(obj, hash=new WeakMap()){
	console.log('obj', obj);
	if(hash.has(obj)) return obj;
	let cobj;
	if(obj === null) return obj;
	let t = typeof obj;

	switch(t){
		case "string":
		case "number":
		case "boolean":
		case "undefined":
			return obj;
	}

	if(Array.isArray(obj)){
		cobj = [];
		obj.forEach((c) => {console.log(c); cobj.push(deepClone(c))});
	} else {
		cobj = {};
		if(Object.prototype.toString.call(obj) === "[object Object]"){
			// 找object的全部property names还有symbol object 然后再用foreach来loop每个variable
			Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)).forEach(c => {
				hash.set(obj, obj);
				cobj[c] = deepClone(obj[c], hash);
			})
		} else {
			cobj = obj;
		}
	}
	return cobj;
}

a.c = {b: a};
console.log(a);
console.log(deepClone(a));


// function print(n){
// 	setTimeout(() => {
// 		console.log(n);
// 	},1, Math.floor(Math.random() * 1000));
// }
//
// for(var i = 0; i < 100; i++){
// 	print(i);
// }

String('11') == new String('11'); // true
String('11') === new String('11'); // false new String('11') return的是一个object, == 会coerce to string 所以是true


var name = 'Tom';
(function() {
	if (typeof name == 'undefined') {
		var name = 'Jack';
		console.log('Goodbye ' + name);
	} else {
		console.log('Hello ' + name);
	}
	// print 的是goodbye jack, 因为 var name = "Jack" 把 var name hoist 到最上，所以name是undefined.
	// 如果没有var的话print出来的是 hello Tom, 因为 IIFE 回去global scope找name
})();

// 输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'
let str = "1,2,3,5,7,8,10";
function output2(str){
	arr = str.split(",").map(a => parseInt(a));
	const result = [];
	let temp = arr[0];
	arr.forEach((value, index) => {
		if(value +1 !== arr[index +1]){
			if(value !== temp){
				result.push(`${temp}~${value}`);
			}else {
				result.push(`${value}`);
			}
			temp = arr[index +1];
		}
	});
	return result.join(',');
}

console.log(output2(str));
