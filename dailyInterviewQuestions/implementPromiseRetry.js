// 第 159 题：实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject

Promise.retry = function (promise, resolve1, reject1, max=5){
	return new Promise((resolve, reject) => {
		resolve1 = resolve1 || resolve;
		reject1 = reject1 || reject;
		promise().then(resolve1, (err) => {
			console.log("!max", !max);
			if(!max){
				reject1(err);
			}else {
				this.retry(promise, resolve1, reject1, --max);
			}

		})
	})
};

function getProm() {
	const n = Math.random() - 0.4;
	return new Promise((resolve, reject) => {
		setTimeout(() =>  {
			console.log(n);
			return n > 0.5 ? resolve(n) : reject(n);
		}, 1000);
	});
}

Promise.retry(getProm).catch(err=>{
	console.error("retry used up", err);
});
