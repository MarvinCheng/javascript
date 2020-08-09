// 编程题，写个程序把 entry 转换成如下对象
const entry = {
	a: {
		b: {
			c: {
				dd: 'abcdd',
				ee: {
					ff: '123',
				}
			}
		},
		d: {
			xx: 'adxx'
		},
		e: 'ae',
		f: { g: '11'}
	}
};

// 要求转换成如下对象
const output = {
	'a.b.c.dd': 'abcdd',
	'a.d.xx': 'adxx',
	'a.e': 'ae'
};

function processEntry(entry, parentKey="", output = {}){
	for(const key in entry){
		let keyName = `${parentKey}${key}`;
		if(typeof entry[key] === "object"){
			processEntry(entry[key], keyName+".", output);
		}else{
			output[keyName] = entry[key];
		}
	}
	return output;
}

const output2 = processEntry(entry);
// console.log(output2);

function flattenObject(output, result = {}){
	for(const key in output){
		const keyArr = key.split('.');
		if(keyArr.length !== 1){
			const last = keyArr[keyArr.length -1];
			keyArr.splice(keyArr.length-1,1);
			const newKey = keyArr.join(".");
			const newObj = new Object();
			newObj[last] = output[key];
			output[newKey] = newObj;
			flattenObject(output, result);
		}
	}
	return output;
}

console.log(flattenObject(output2));
