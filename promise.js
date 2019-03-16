var promise1 = Promise.resolve(3);
var promise2 = Promise.resolve(42);
var promise4 = Promise.resolve(1234);
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 11);
});
var promise5 = Promise.reject("Error");

var promise6 = new Promise((resolve, reject) => {
    resolve("123");
});
promise6.then((onfulfilled) => console.log(onfulfilled),
    (onRejected) => console.log(onRejected));

Promise.all([promise1, promise2, promise3, promise4]).then(
    (values) => values.reduce((l, i, index, array) => {
        l = l + i;
        if (index == array.length - 1) {
            console.log(l);
        }
        return l;
    }),
    (err) => console.log(err));
// expected output: Array [3, 42, "foo"]

Promise.race([promise1, promise2, promise3, promise4]).then(
    (resp) => console.log(resp),
    (err) => console.log(err)
);


// catch is the same with calling Promise.prototype.then(undefined, onRejected).
// (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected))
promise5.catch((err) => console.log(err)).finally(() => console.log("finally"));

//promise all return 的response会照着promise的顺序来return
Promise.all([promise1, promise2, promise3, promise4]).then(
    (values) => values.forEach((i) => console.log(i)),
    (err) => console.log(err));

//如果promise有一个reject的话就会return error
Promise.all([promise1, promise2, promise3, promise4, promise5]).then(
    (values) => values.reduce((l, i, index, array) => {
        l = l + i;
        if (index == array.length - 1) {
            console.log(l);
        }
        return l;
    }),
    (err) => console.log(err));



var p2 = new Promise(function (resolve, reject) {
    resolve(1);
});

// When a value is simply returned from within a then handler, it will effectively return Promise.resolve(<value returned by whichever handler was called>).
p2.then(function (value) {
    console.log("value in p2 ", value); // 1
    return value + 1;
}).then(function (value) {
    console.log("p2.then value " + value + ' - A synchronous value works');
});

p2.then(function (value) {
    console.log("value in p2 ", value); // 1
});