let array = [1, 2, 3, 4, 5];

/** MAP **/
//map will return a new array
let newArr = array.map((i, index, array) => {
	if(index == array.length - 1) {
		return i;
	} else {
		return i * 2;
	}
});

console.log(newArr);

/** REDUCE **/
//reduce will return a final value
// prev 是上一个iteration return 的value
// 第一次loop的时候, index是1, prev 是 array[0]. 所以如果你要变例 index = 0 的时候是不可以的, 除非你declare initial value.
// Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error
	// reduce((prev,curr,index,array),initialValue)
let newReduce = array.reduce((prev, current, index, array) => {
		prev += current;
		if(index == array.length - 1) {
			return prev + 20;
		}
		//这一段不会被跑,因为当reduce 会跳过第一个index array,直接把第一个的value放进prev
		if(index === 0) {
			console.log("index == 0 ");
			return 1000;
		}
		return prev;
	});


let newReducewInitial = array.reduce((prev, current, index, array) => {
	prev += current;
	if(index == array.length - 1) {
		return prev + 20;
	}
	//这一段会被跑,因为有declare initial value,所以loop 会跑5次
	if(index === 0) {
		console.log("newReducewInitial index == 0 ");
		return 1000;
	}
	return prev;
}, 0);

//reduce 每一个iteration一定要return一个value, 不然的话就会是undefined (like newReduce2)
let newReduce2 = array.reduce((prev, current, index, array) => {
	prev += current;
	if(index == array.length - 1) {
		prev + 20;
	}
	prev;
});

console.log(newReduce);
console.log(`newReduce2 ${newReduce2}`);

/** FILTER **/
//filter calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true.
let newFilter = array.filter((i, index, array) => {
	//if this is true, the element will be included in the new array
	return i > 2;
});

console.log(newFilter);

//** SYMBOL ITERATOR **/
//iterator
let arr = [1, 2, 3];
let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//better way of iterator, run only done = false
for(let val, ret, it = arr[Symbol.iterator](); (ret = it.next()) && !ret.done;) {
	val = ret.value;
	console.log(val);
}

array.push(6);
console.log(array);
array = [1];
console.log(array);

/** SLICE **/
array = [1, 2, 3, 4, 5];
console.log(`slice : ${array.slice()}`);
//slice 不是的parameter不是index,是position
console.log(`slice 1: ${array.slice(1)}`);
console.log(`array ${array}`);
console.log(`slice 2 ${array.slice(2)}`);

/** SPLICE **/
console.log(`splice : ${array.splice()}`);
console.log(`splice : ${array.splice(0, 1)}`);
console.log(`splice : ${array.splice(//from index 
	0,//delete count
	1)}`);


let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.map(i => {
	return `val ${i * 2}`;
}));

/** FOREACH **/
// forEach 会loop一个callback function,每一个value都会跑这个function. 和map一样,只是没有return new array.
arr2.forEach((value, index, array) => {
	console.log(`in foreach: ${value}`);
})

/** FOR IN **/
// for..in 不适合用来loop array, 因为for..in return的是all enumerable properties, 而且for...in 不注重index order. for in 的 property 是 string, 所以用来做判断会有错误 (除非cast to int)
// for..in 比较适合用来loop object
for(let i in arr2) {
	console.log(`array 2 with ${i} and type of i is ${typeof i} value : ${arr2[i]}`);
}

//for..of 就可以用来loop array.
for(let i of arr2) {
	console.log(`array 2 with value ${i}`);
}
let str = "String";
console.log(Array.from(str));
console.log([...str]);
for(let i of Array.from(str)) {
	console.log(`${i}`);
}
// for (let i of ...str) => 不可以. spread rest只可以用在assign variable / as an function parameter

/** 在reduce 里面跑2个function **/
let arr3 = [1, 2, 3, 4, 5];
let red = arr3.reduce((prev, cur, idx) => {
	return p => {
		// 这里的prev是整个p function,因为reduce for loop的时候return p function回去
		console.log(`prev ${prev}`);
		console.log(`idx ${idx}`);
		console.log(`p: ${p}`);
	}
});

red(2); // => 这个2 pass 进去的是最后一个index return 的function

//在foreach里面跑2个arrow function的话第二个arrow function不会被跑
//forArr is undefined. 因为foreach不会return任何东西
let forArr = arr3.forEach(i => {
	return p => {
		console.log(`p ${p}, i ${i}`);
	}
});

console.log(arr3.indexOf(1));
console.log(arr3.indexOf(2));

let newArr2 = [1, 2, 3, 4, 5];
// call reverse will reverse the original function as well
let revNewArr2 = newArr2.reverse();
revNewArr2.push(1);
console.log(revNewArr2);
console.log(newArr2);
console.log(newArr2.shift());
console.log(newArr2.unshift(2));
console.log(newArr2);


var moveZeroes = function(nums) {
	let idxToSwap = 0
	let i = 0
	while(i < nums.length) {
		if(nums[i] !== 0) {
			[nums[i], nums[idxToSwap]] = [nums[idxToSwap], nums[i]]
			idxToSwap++
		}
		i++
	}
	return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));

let arr4 = [1, 2, 3, 4, 5];
let find = arr4.find((i) => i === 3);
console.log(`find array ${find}`);

let arr5 = [{'a': 1}, {'a': 2}, {'a': 3}];
let found = arr5.find((i) => i.a === 2);
console.log(`found array ${Object.entries(found)}`);
console.log(found);

let arr6 = ["Jan", "Feb", "Mar"];
// splice 会影响original array
console.log(arr6.splice(arr6.indexOf("Feb"), 1));
console.log(arr6);
arr6.unshift("Apr");
console.log(arr6);
console.log(arr6.splice(arr6.indexOf("Jan")));

let arr7 = ["John", "Bla", "pig"];
// slice 不会影响original array
// -1 是拿倒数第一个 element
console.log(arr7.slice(-1));
// -2 是拿倒数第二个 element
console.log(arr7.slice(-2));
console.log(arr7);


let obj = {a: 1, b: 2, c: {ca: 3, cb: 4}};
console.log(obj);
// 有效的clone object
let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2);
// clone了object之后不是同一个object， reference不一样
console.log(obj === obj2); // false
console.log(obj.c === obj2.c); // false
let obj3 = Object.assign({}, obj);
console.log(obj3);
console.log(obj === obj3); // false
// true
// Object.assign 的nested object是reference过去的，
// 只有first layer是cloned
console.log(obj.c === obj3.c);


const investors = [
	{first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
	{first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
	{first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
	{first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
	{first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
	{first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
	{first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = investors.filter(inventor => inventor.year >= 1500 && inventor.year <1600);
console.log(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const name = investors.map(investor => `${investor.first} ${investor.last}`);
console.log(name);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = investors.sort((a,b) => a.year - b.year);
// sort will change the original array as well
console.log(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// 如果没有declare initial value的话, 第一个acc是第一个object
const totalYears = investors.reduce((acc,investor)=> acc + (investor.passed - investor.year), 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const sortYearLived = investors.sort((a,b)=>{
	let aYearLived = a.passed - a.year;
	let bYearLived = b.passed - b.year;
	// -1: a first then b
	// 1 : b first then a
	return aYearLived > bYearLived ? -1 : 1;
});
console.table(sortYearLived);


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((a, b) => {
	let [aFName, aLName]= a.split(", ");
	let [bFName, bLName] = b.split(", ");
	// ascending
	// descending needs to * -1
	return aLName.localeCompare(bLName) ;
});
console.table(sortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const sum = data.reduce((acc, curr) => {
	acc[curr] = acc[curr] + 1 || 1;
	return acc;
},{});
console.log(sum);


const people2 = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const some = people2.some(ppl => {
	let currYear = new Date().getFullYear();
	let age = currYear - ppl.year;
	return age >= 19;
});
console.log(some);
// Array.prototype.every() // is everyone 19 or older?
const every = people2.every(ppl => {
	let currYear = new Date().getFullYear();
	let age = currYear - ppl.year;
	return age >= 19;
});
console.log(every);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const find2 = comments.find(comment => {
	return comment.id === 823423
});
console.log(find2);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commIdx = comments.findIndex(comment => comment.id === 823423);
console.log(commIdx);
comments.splice(commIdx,1);
console.log(comments);
