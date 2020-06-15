let insertionSort = (inputArr) => {
	let length = inputArr.length;
	for (let i = 1; i < length; i++) {
		let key = inputArr[i];
		let j = i - 1;
		// 拿i和i到0(j)的号码来比较,如果i小过j就换位子
		while (j >= 0 && inputArr[j] > key) {
			inputArr[j + 1] = inputArr[j];
			j = j - 1;
		}
		inputArr[j + 1] = key;
		console.log(inputArr);
	}
	return inputArr;
};

console.log(insertionSort([5,3,1,4,6]));
