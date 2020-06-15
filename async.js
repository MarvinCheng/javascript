
var a =0;
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1);
    }, 500);
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(2);
    }, 500);
});

var promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(2);
    }, 2000);
});

var promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("error");
    }, 2000);
});


console.log("In global, a = ",a);
// expected output: [object Promise]
async function inner() {
    var a = 2;
    console.log("before await, a = ",a)
    a = await Promise.all([promise1,promise2]);
    console.log("after await, a = ", a);
      a = await promise1;
    console.log("after another await, a = ", a);
      const b = promise3;
      console.log("b before await ",b);
    console.log("b after await",await b);
    const c = promise4;
    const d = promise3;
    console.log("d after await ", await d);
    console.log("c after rejected await ", await c.catch((err)=> console.log("error in c", err)));


    console.log("END");
}
// inner();
console.log("In global after async, a = ",a);


async function reject(){
    let a = 2;
    // 如果没有用try catch的话， async function跑到promise4
    // 就会停止
    try{
        a = await promise4;
    }catch(err){
        console.log(err);
    }
    console.log('rejected ', a);
    let b = await promise3;
    console.log('b after await ', b);
}

// reject();


async function rejected(){
    let a = 2;
    try{
        a = await promise4;
    } catch(err){
        console.log(err);
    }
    console.log('rejected ',a);
}

let b = rejected();
setTimeout(()=>{
    // b 是 rejected的promise
    // 如果有用try catch来wrap rejected promise的话
    // b是resolved的promise
    console.log(b);
},3000);
