function selectionSort(nums){
	let arr = nums;
	for(let i=0;i<arr.length;i++){
		let min = i;
		for(let j=i+1;j<arr.length;j++){
			if(nums[min] > arr[j]){
				min=j;
			}
		}
		if(min !== i){
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
		console.log(arr);
	}
	return arr;
}

console.log(selectionSort([8,5,2,6,9,3,7,4,1]));
