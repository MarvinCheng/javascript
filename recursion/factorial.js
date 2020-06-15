function sum(n, total = 0){
	if(n===0){
		return total;
	}
	total +=n;
	n--;
	return sum(n, total);

}

console.log(sum(6)); // 21
console.log(sum(5)); // 15
console.log(sum(1)); // 1
console.log(sum(0)); // 0
