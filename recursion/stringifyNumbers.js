
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
			hello: {
            	what: 12,
			}
        }
    }
};


function stringifyNumbers(obj, results = obj) {
	let keys = Object.keys(obj);
	for (const key of keys){
		let val = obj[key];
		if(Object.keys(val).length > 0){
			results[key] = stringifyNumbers(val, obj[key]);
		}
		else if (Number.isInteger(obj[key])){
			val = results[key].toString();
			results[key] = val;
		}
	}
	return results;
}
console.log(stringifyNumbers(obj));
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

