// ADD_1 multiply_2 from 0 to number
/*
 * Complete the 'getMinOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts LONG_INTEGER_ARRAY kValues as parameter.
 */

function getMinOperations(kValues) {
	// Write your code here
	const result = [];
	for(const value of kValues){
		let step = 0;
		let remaining = value;
		while(remaining !== 0){
			let divide = remaining / 2;
			if(remaining === 1){
				remaining = remaining -1;
				step++;
			} else if(divide % 2 === 0){
				remaining = divide;
				step++;
			} else {
				remaining = Math.round(divide) -1;
				step+=2;
			}
		}
		result.push(step);
		// // get the exponent of 2 for value
		// const exponent = Math.floor(Math.log2(value));
		// // calculate the remaining after  2^x
		// const remaining = value - Math.pow(2,exponent);
		// // step = ADD_1 (initial) + exponent (number of multiply 2 applies) + remaining of ADD_1
		// const step = 1 + exponent + remaining;
		// result.push(step);
	}
	return result;
}
// console.log(getMinOperations([3]));
console.log(getMinOperations([5,3,56, 89]));

// console.log(getMinOperations([
// 	4,
// 	89,
// 	18,
// 	56,
// 	52,
// 	38,
// 	100,
// 	105,
// 	78,
// 	69,
// 	87,
// 	60,
// 	106,
// 	117,
// 	19,
// 	33,
// 	27,
// 	143,
// 	120,
// 	7,
// 	69,
// 	7,
// 	101,
// 	32,
// 	50,
// 	140,
// 	53,
// 	3,
// 	92,
// 	104,
// 	119,
// 	143,
// 	71,
// 	26,
// 	91,
// 	138,
// 	11,
// 	14,
// 	37,
// 	96,
// 	13,
// 	39,
// 	50,
// ]));
//
// 3
// 10
// 6
// 8
// 8
// 8
// 9
// 10
// 10
// 9
// 11
// 9
// 10
// 11
// 7
// 7
// 8
// 12
// 10
// 5
// 9
// 5
// 10
// 6
// 8
// 10
// 9
// 3
// 10
// 9
// 12
// 12
// 10
// 7
// 11
// 10
// 6
// 6
// 8
// 8
// 6
// 9
// 8
//
var https = require('https');

async function getCountries(s, p) {
	let page = 0;
	let totalPages = 1;
	let result = [];
	let url = `https://jsonmock.hackerrank.com/api/countries/search?name=${s}`;
	await httpGet(url, result);
	async function httpGet(url, result, page=1){
		await https.get(`${url}&page=${page}`, (response) => {
			const {statusCode} = response;
			if(statusCode !== 200){
				throw new Error("response got error");
			}
			response.setEncoding('utf8');
			response.on('data', (chunk) => {
				const json = JSON.parse(chunk);
				totalPages = json["total_pages"];
				result= result.concat(json["data"]);
				if(totalPages > page){
					page++;
					httpGet(url, result, page);
				}
			});
		}).on('error', (err) => {console.error(err);});
	}

	result = result.filter(country => {
			return country["name"].toLowerCase().indexOf(s) !== -1 && country["population"] > p;
	});
	return result.length;

}

console.log(getCountries('in', 100000));
