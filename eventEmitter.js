/*
Write a class, EventEmitter that has three methods: on, emit, and removeListener.

1. on("eventName", callbackFn) - a function that takes an eventName and a callbackFn,
	should save the callbackFn to be called when the event with eventName is emitted.
2. emit("eventName", data) - a function that takes an eventName and data object,
	should call the callbackFns associated with that event and pass them the data object.
3. removeListener("eventName", callbackFn) - a function that takes eventName and callbackFn,
	should remove that callbackFn from the event.
*/

class EventEmitter {
	constructor() {
		this.events = {};
	}
	on(eventName, callbackFn){
		let eventFunctions = this.events[eventName];
		if(eventFunctions) {
			eventFunctions.push(callbackFn);
		}
		else {
			this.events[eventName] = [callbackFn];
		}
	}
	emit(eventName, data){
		let eventFunctions = this.events[eventName];
		for (let eventFunction of eventFunctions){
			eventFunction(data);
		}
	}
	removeListener(eventName, callbackFn){
		let eventFunctions = this.events[eventName];
		this.events[eventName] = eventFunctions.filter(
			(fn) => fn !== callbackFn);
	}
}

let superbowl = new EventEmitter();

const cheer = function (eventData) {
	console.log('Hi  ' + eventData.scoringTeam);
}

const cheer2 = function (eventData) {
	console.log('Hi ' + eventData.scoringTeam);
}

superbowl.on('touchdown', cheer);
superbowl.on('touchdown', cheer2);

superbowl.emit('touchdown', { scoringTeam: 'Patriots' }); // Both cheer and jeer should have been called with data

superbowl.removeListener('touchdown', cheer2);

superbowl.emit('touchdown', { scoringTeam: 'Seahawks' }); // Only cheer should have been called
