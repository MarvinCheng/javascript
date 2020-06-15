//Find the missing number in a given integer array of 1 to 100
function findMissingInteger(nums){
	for(let i=0, j=1;j<nums.length; i++,j++){
		if(nums[j] - nums[i] !== 1){
			return nums[i] + 1;
		}
	}
}

console.log(findMissingInteger([1,2,3,4,5,6,7,8,10]));
