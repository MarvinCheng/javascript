// reverse(str) => {
//
// }
//
// reverse('hello'); // olleh
//
//

function reverse(str, i = str.length - 1, reverseWord='') {
	console.log(i);
	if (i === -1) {
		return reverseWord;
	}
	reverseWord = reverseWord + str[i];
	i--;
	return reverse(str, i, reverseWord);
}

// console.log(reverse('hello'));


function reverse2(str, firstIdx, lastIdx, reverse=new Array(str.length)){
	if(firstIdx < lastIdx){
		reverse[firstIdx] = str[lastIdx];
		reverse[lastIdx] = str[firstIdx];
		firstIdx++;
		lastIdx--;
	}
	else {
		if (firstIdx === lastIdx){
			reverse[firstIdx] = str[firstIdx];
		}
		return reverse.join('');
	}
	return reverse2(str, firstIdx,lastIdx,reverse);

}


console.log(reverse2('abcdef', 0, 'abcdef'.length-1)); // fedcba
console.log(reverse2('hello', 0, 'hello'.length-1)); // olleh
console.log(reverse2('password', 0, 'password'.length-1)); // olleh
console.log(reverse2('ushallnotpass', 0, 'ushallnotpass'.length-1)); // olleh
let a = 'hello';
console.log(a[0]);
a[0] = 'b';
console.log(a[0]);
