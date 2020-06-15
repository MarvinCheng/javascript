// write an await function based on your understanding
let promise11 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve(11234);
	},10000);

});

function run(generatorFunction) {
	const iterator = generatorFunction();
	// IIFE function 去跑 iterator, 如果 iterator.done (就是promise跑完了，就return value)
	(function handleNext(value){
		console.log(1);
		const next = iterator.next(value);
		if (next.done) {
			return next.value;
		} else {
			// 如果iterator.done is false, 就resolve next.value (这个情况是pending 的promise)
			return Promise.resolve(next.value)
			.then(
				// resolve了就用handleNext(resolved value)来return value
				handleNext,
				err => Promise.resolve(iterator.throw(err)).then(handleNext)
			);
		}
	})();
}

function *await2(){
	let result;
	try {
		result = yield promise11;
		console.log('result',result);
	} catch (err) {
		console.error(err);
	}

}

let a = run(await2);
// let a = await2(promise11);
// console.log('a' ,a.next().value);


