// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

function intersection(arr1, arr2){
	// take smallest array
	const result = [];
	const smallArr = arr1.length < arr2.length? arr1: arr2;
	const longArr = smallArr === arr1 ? arr2: arr1;
	for(let i=0; i<smallArr.length; i++){
		const num = smallArr[i];
		const idx = longArr.indexOf(num);
		if(idx !== -1){
			result.push(num);
			longArr.splice(idx,1);
		}
	}
	console.log(longArr);
	return result;
}

let nums1 = [1,2,2,1];
let nums2 = [2,2];

console.log(intersection(nums1,nums2));
