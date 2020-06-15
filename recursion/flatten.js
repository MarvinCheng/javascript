function flatten(array, result=[]){
	for(let i of array){
		if (Array.isArray(i)){
			flatten(i, result);
		} else {
			result.push(i);
		}
	}
	return result;
	// add whatever parameters you deem necessary - good luck!
}
console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]



let aa = new Array(2);
aa.fill(22);
console.log(aa);


function exponent(base, number, result = number){
	if(base === 0){
		return 1;
	}
	if (base >=1){
		result = number;
	}

	return exponent(base--, number, result);
}
