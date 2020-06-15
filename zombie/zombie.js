let dimension;
let initialPosition;
let currPosition;
let creaturePositions;
let moves;
let edge;
let score = 0;
const finalPosition=[];
const infected = [];

window.onload = function(){
	fetch('input.json').then(response => {
		if(response.ok){
			return response.json();
		}
		throw new Error("Error reading input.json");
	}).then(json => {
		({dimension, initialPosition,creaturePositions,moves} = json);
		document.querySelector(".input").appendChild(display(json));
		initialize();
		start(moves);
		while(infected.length > 0){
			currPosition = infected.shift();
			start(moves);
		}
		document.querySelector(".output").appendChild(display());
	}).catch(err => {
		document.querySelector(".error").innerHTML= err;
	});

};

function initialize(){
	currPosition = initialPosition;
	edge = dimension -1;
}

function start(moves){
	moves.split('').forEach((move, idx) =>{
		let position = moveFunc(move);
		if(idx === moves.length -1){
			finalPosition.push(position);
		}
		const hasCreature = checkPositionHasCreature(position);
		if(hasCreature){
			infected.push(hasCreature);
			score++;
		}
	});
}

function moveFunc(move){
	const availableMoves = {
		D: [0,1],
		U: [0,-1],
		L: [-1,0],
		R: [1,0],
	};
	const newMoveCoordinate = availableMoves[move];
	if(!newMoveCoordinate){
		throw new Error("Move not available");
	}
	newMoveCoordinate.forEach((m, idx) => {
		if(newMoveCoordinate[idx]){
			let newCoordinate = currPosition[idx] + newMoveCoordinate[idx];
			if(newCoordinate > edge){
				newCoordinate = 0;
			} else if(newCoordinate < 0){
				newCoordinate = edge;
			}
			currPosition = idx? [currPosition[0], newCoordinate] : [newCoordinate, currPosition[1]];
		}
	});
	return currPosition;
}

function checkPositionHasCreature(position){
	if(position.length !== 2){
		throw new Error("Position has to be in X and Y.");
	}
	return creaturePositions.find((ele)=> ele[0] === position[0] && ele[1] === position[1]);

}

function display(json=null){
	const fragment = document.createDocumentFragment();
	if(!json){
		const scoreEle = document.createElement("li");
		scoreEle.innerHTML = `score: ${score}`;
		const zombieEle = document.createElement("li");
		const finalPositions = finalPosition.map(fp =>
			`[${fp}]`);
		zombieEle.innerHTML = `Zombie positions: ${finalPositions.join(", ")}`;
		fragment.appendChild(scoreEle);
		fragment.appendChild(zombieEle);
	}else {
		for(const k in json){
			const li = document.createElement("li");
			if(Array.isArray(json[k]) && json[k][0].constructor === Array){
				const val = json[k].map(value =>
					`[${value}]`);
				li.innerHTML= `${k}: ${val.join(", ")}`;
			}else {
				li.innerHTML= `${k}: ${json[k]}`;
			}
			fragment.appendChild(li);
		}
	}
	return fragment;
}
