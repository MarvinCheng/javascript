let array = [1, 2, 3, 4, 5];

/** MAP **/
//map will return a new array
let newArr = array.map((i, index, array) => {
    if (index == array.length - 1) {
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
        if (index == array.length - 1) {
            return prev + 20;
        }
        //这一段不会被跑,因为当reduce 会跳过第一个index array,直接把第一个的value放进prev
        if (index === 0) {
            console.log("index == 0 ");
            return 1000;
        }
        return prev;
    });


let newReducewInitial = array.reduce((prev, current, index, array) => {
    prev += current;
    if (index == array.length - 1) {
        return prev + 20;
    }
    //这一段会被跑,因为有declare initial value,所以loop 会跑5次
    if (index === 0) {
        console.log("newReducewInitial index == 0 ");
        return 1000;
    }
    return prev;
}, 0);

//reduce 每一个iteration一定要return一个value, 不然的话就会是undefined (like newReduce2)
let newReduce2 = array.reduce((prev, current, index, array) => {
    prev += current;
    if (index == array.length - 1) {
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
for (let val, ret, it = arr[Symbol.iterator](); (ret = it.next()) && !ret.done;) {
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
for (let i in arr2) {
    console.log(`array 2 with ${i} and type of i is ${typeof  i } value : ${arr2[i]}`);
}

//for..of 就可以用来loop array.
for (let i of arr2) {
    console.log(`array 2 with value ${i}`);
}
let str = "String";
console.log(Array.from(str));
console.log([...str]);
for (let i of Array.from(str)) {
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


var moveZeroes = function (nums) {
    let idxToSwap = 0
    let i = 0
    while (i < nums.length) {
        if (nums[i] !== 0) {
            [nums[i], nums[idxToSwap]] = [nums[idxToSwap], nums[i]]
            idxToSwap++
        }
        i++
    }
    return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));

let arr4= [1,2,3,4,5];
let find = arr4.find((i)=> i===3);
console.log(`find array ${find}`);

let arr5 = [{'a':1},{'a':2},{'a':3}];
let found = arr5.find((i)=> i.a === 2);
console.log(`found array ${Object.entries(found)}`);
console.log(found);