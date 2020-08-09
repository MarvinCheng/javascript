// Sorting numbers based on the number of 1's in their binary form and if equal use natural sorting.
function sort(numbers){
	const numbersInBinary = numbers.map(number=> number.toString(2));
	numbersInBinary.sort((a,b) => {
		return sortFunc(a,b);
	});
	return numbersInBinary;
}

function sortFunc(a,b){
	const aObj = getObj(a);
	const bObj = getObj(b);
	if(aObj[1] === bObj[1]) {
		return parseInt(b, 2) - parseInt(a, 2);
	} else {
		return b.localeCompare(a);
	}
}

function getObj(num){
	return num.split('').reduce((obj, curr) => {
		obj[curr] = obj[curr] ? obj[curr] + 1 : 1;
		return obj;
	}, {});
}

console.log(sort([1,2,3,4,5,6,7,8,9,10]));
