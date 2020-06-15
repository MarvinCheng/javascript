let i=0;
async function test(){
	while(true){
		console.log(i);
		if(i!==5){
			i++;
			await new Promise(r => setTimeout(r, 1000));
		}else{
			break;
		}
	}
}


test2();


async function test2(){
	console.log('test2');
	let i=0;
	while(true){
		console.log(i);
		i++;
		await new Promise(r => setTimeout(r, 1000));
		if(i===5){
			break;
		}
	}

}


class Engine {
	constructor(enginerNumber, model){
		this.engineNumber = enginerNumber;
		this.model = model;
	}
}

class Car extends Engine{
	constructor(color, enginerNumber,model){
		super(enginerNumber,model);
		this.color  = color;
	}
}

let car = new Car('blue','123','myvi');
console.log(car);
