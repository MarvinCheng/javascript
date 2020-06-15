function capitalizeWords (words, results = []) {
	if(Array.isArray(words)){
		for(const word of words){
			capitalizeWords(word, results);
		}
	} else {
		results.push(words.toUpperCase());
	}
	return results;
}
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capitalizeWords(['u','are','em'])); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capitalizeWords('you')); // ['I', 'AM', 'LEARNING', 'RECURSION']
