// avg case complexity: n^2
function bubbleSort(nums){
	let arr = nums;
	for(let i=0;i<arr.length;i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[j] > arr[j+1]) {
				let temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
		console.log(arr);
	}
	return arr;
}

console.log(bubbleSort([5,3,1,6,7,4,2,8]));
