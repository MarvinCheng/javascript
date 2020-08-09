// An object which represents such a scheduled shift for a given employee #1 may look like this:
// var objRoster1 = {
// 	Id: 1,
// 	Employee: 1,
// 	Department: 1,
// 	StartTime: 1508450400,
// 	EndTime: 1508479200
// };
//
// The above record defines that employee #1 is supposed to work in department #1 from 1508450400 until 1508479200
// (those 2 integers are actually UNIX timestamps which correspond to 9 AM, 5 PM on 2017-10-20 in Sydney - UTC +11).
//
// We have a logical constraint which dictates that a person can only work in one shift at a given time.
// This means that if we wanted to save a new shift objRoster2 for employee #1,
// we would need to make sure that it does not overlap with objRoster1 in any way.
//
// 	Can you come up with an algorithm which can check whether a new objRoster2 with StartTime x, EndTime y may overlap objRoster1?

const objRoster = {
	Id: 1,
	Employee: 1,
	Department: 1,
	StartTime: 1508350400,
	EndTime: 1508450402
};


const objRoster1 = {
	Id: 1,
	Employee: 1,
	Department: 1,
	StartTime: 1508450400,
	EndTime: 1508479200
};

const objRoster2 = {
	Id: 1,
	Employee: 1,
	Department: 1,
	StartTime: 1508452200,
	EndTime: 1508489200
};

const objRoster3 = {
	Id: 1,
	Employee: 1,
	Department: 1,
	StartTime: 1508479201,
	EndTime: 1508499200
};

const objRoster4 = {
	Id: 1,
	Employee: 1,
	Department: 1,
	StartTime: 1508350400,
	EndTime: 1508450399
};


function checkExist(obj, ...names){
	names.forEach(name => {
		if(!obj[name]){
			throw new Error(`${name} not found`);
		}
	});
}

/**
 * This function accept 2 roster object, and checks if the startTime and endTime of both objects
 * are overlapping each other.
 * Return true if overlaps, else false.
 *
 *
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
function checkOverlap(obj1, obj2){
	checkExist(obj1, "StartTime", "EndTime");
	checkExist(obj2, "StartTime", "EndTime");
	const {StartTime:startTime, EndTime:endTime}= obj1;
	const {StartTime:newRosterStartTime, EndTime: newRosterEndTime} =  obj2;

	// takes in non-overlapping situation, and invert the result.
	// startTime <= newRosterEndTime is derived from the case where new roster start/end time is before roster.
	// 						|------roster-------|
	// |----newRoster-----|
	// in this case, rosterStartTime >= newRosterEndTime, and to find overlap, it is
	// !(rosterStartTime >= newRosterEndTime) which equals to rosterStartTime <= newRosterEndTime

	// while endTime >= newRosterStartTime is derived from the case where new roster start/end time is after roster.
	//  |------roster-------|
	// 							|----newRoster-----|
	// in this case, rosterEndTime <= newRosterStartTime, and to find overlap, it is
	// !(rosterEndTime <= newRosterStartTime) which equals to rosterEndTime >= newRosterStartTime
	return (startTime <= newRosterEndTime && endTime >= newRosterStartTime);
}

console.log(checkOverlap(objRoster1, objRoster2));
console.log(checkOverlap(objRoster1, objRoster3));
console.log(checkOverlap(objRoster1, objRoster));
console.log(checkOverlap(objRoster1, objRoster4));
