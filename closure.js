/*
The range(..) function takes a number as its first argument,
representing the first number in a desired range of numbers.
The second argument is also a number representing the end of the desired range (inclusive).
If the second argument is omitted, then another function should be returned that expects that argument.
*/

function range(start, end) {

	function getRange(start,end) {
		let arr = [];
		let i = start;
		while(i<=end){
			arr.push(i);
			i++;
		}
		return arr;
	}

	if(end !==undefined) {
		return getRange(start,end);
	} else {
		return function getEnd(end) {
			return getRange(start,end);
		}
	}
}
