// avg complexity: nlogn
// worse: n2

function quickSort(originalArr) {
	if (originalArr.length <= 1) {
		return originalArr;
	} else {
		let leftArr = [];
		let rightArr = [];
		let newArr = [];
		let pivot = originalArr.pop(); // 用pivot来分开left and right arr
		console.log(pivot);
		let length = originalArr.length;
		for (let i = 0; i < length; i++) {
			if (originalArr[i] <= pivot) {    // using pivot value start comparing
				leftArr.push(originalArr[i]);
			} else {
				rightArr.push(originalArr[i]);
			}
		}
		console.log(leftArr, rightArr);
// array will be
// returned until sorting occurs
return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
	}
}

console.log(quickSort([9, 0, 2, 7, -2, 6, 1 ]));
