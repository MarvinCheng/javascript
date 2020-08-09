const sleep = (time) => {
	return new Promise(resolve => setTimeout(resolve, time))
};

async function sleepAsync() {
	await sleep(1000);
	console.log('after 1 sec');
}

sleepAsync();
