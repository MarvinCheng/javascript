var promise1 = Promise.resolve(3);
var promise2 = Promise.resolve(42);
var promise4 = Promise.resolve(1234);
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 11);
});
var promise5 = Promise.reject("Error");

var promise6 = new Promise((resolve, reject) => {
    reject("123");
});
promise6.then((onfulfilled) => console.log(`promise 6 onfulfilled: ${onfulfilled}`),
    (onRejected) => console.log(`promise 6 onRejected: ${onRejected}`)).catch(err=>{
        console.log('promise 6 err', err);
});

Promise.all([promise1, promise2, promise3, promise4]).then(
    (values) => values.reduce((l, i, index, array) => {
        l = l + i;
        if (index == array.length - 1) {
            console.log(`promise all of promise 1,2,3,4 is ${l}`);
        }
        return l;
    }),
    (err) => console.log(err));

Promise.race([promise1, promise2, promise3, promise4]).then(
    (resp) => console.log(`response of promise race is ${resp}`),
    (err) => console.log(err)
);


// catch is the same with calling Promise.prototype.then(undefined, onRejected).
// (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected))
promise5.catch((err) => console.log(`Promise 5 catch error: ${err}`)).finally(() => console.log("promise 5 catch: finally"));

//promise all return 的response会照着promise的顺序来return
Promise.all([promise1, promise2, promise3, promise4]).then(
    (values) => values.forEach((i) => console.log(`promise all of promise 1,2,3,4 return value: ${i}`)),
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
    (err) => console.log(`Promise all of 1,2,3,4,5 return error: ${err}`));



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


let v  = new Promise((resolve, reject) => {
    reject(1);
});

v.then(val =>{
    console.log(val);
}).catch(err => {
    console.log('v err', err);
});


// window.onload = function(){
//
//     let pp = new Promise((resolve, reject) => {
//         // let http = new XMLHttpRequest();
//         // http.open("GET", 'test2.json');
//         // http.send();
//         // http.onload = function(){
//         //     if(http.status==200){
//         //         resolve(http.response);
//         //     }else{
//         //         reject(http.statusText);
//         //     }
//         // };
//         fetch('test2.json').then(resp=>{
//             if(resp.ok){
//                 resolve(resp.json());
//             } else{
//                 reject(resp.statusText);
//             }
//
//         });
//     });
//
//     pp.then(resp=> {
//         console.log(resp);
//     }).catch(err=>{
//         console.error(err);
//     });
//
//
// };

Promise.retry = function (promise, resolve1, reject1, max=2){
    return new Promise((resolve, reject) => {
        resolve1 = resolve1 || resolve;
        reject1 = reject1 || reject;
        promise().then((resolve1, err) => {
            if(!max){
                reject1(err);
            }
            this.retry(promise, resolve1, reject1, --max);
        })
    })
}
function getProm() {
    const n = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() =>  n > 0.5 ? resolve(n) : reject(n));
    }, 1000);
}
Promise.retry(getProm);
