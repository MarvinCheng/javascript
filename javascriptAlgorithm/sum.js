//Write a sum method which will work properly
// when invoked using either syntax below.
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5
function sum(x){
	if(arguments.length > 1){
		// arguments 是一个object
		console.log(arguments);
		return Object.values(arguments).reduce((sum,curr) => sum + curr);
	} else{
		return function y(arg){
			return x + arg;
		}
	}
}

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
