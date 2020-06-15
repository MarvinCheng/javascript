function findDuplicateNumber(nums){
	const obj = new Set();
	for(let i=0;i<nums.length; i++){
		if(obj.has(nums[i])){
			return nums[i];
		} else {
			obj.add(nums[i]);
		}
	}
	return false;
}


console.log(findDuplicateNumber([1,2,3,4,5,6,7,8,6,10]));
