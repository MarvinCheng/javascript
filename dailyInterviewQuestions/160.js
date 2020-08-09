// 第 160 题：输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法
const list = [1, 2, 3];
const square = num => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num * num)
		}, 1000)
	})
};

function test() {
	// forEach 会针对每个list 的variable跑forEach 里面的function
	// 跑完了才会一次过console.log
	list.forEach(async x=> {
		const res = await square(x);
		console.log(res)
	})
}
// test();

async function test2(){
	for(const i of list){
		const res = await square(i);
		console.log(res);
	}
}

test2();
