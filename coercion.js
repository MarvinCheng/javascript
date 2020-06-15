/*
scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm")
and a meeting duration (number of minutes).
It should return true if the meeting falls entirely within the work day
(according to the times specified in dayStart and dayEnd);
return false if the meeting violates the work day bounds.
 */


const dayStart = "07:30";
const dayEnd = "17:45";
const dayStartTime = dayStart.split(':');
const dayStartMin = (parseInt(dayStartTime[0]) * 60 ) + parseInt(dayStartTime[1]);
const dayEndTime = dayEnd.split(':');
const dayEndMin = (parseInt(dayEndTime[0]) * 60 ) + parseInt(dayEndTime[1]);

function scheduleMeeting(startTime,durationMinutes) {
	const time = startTime.split(':');
	const hourInMinutes = parseInt(time[0]) *  60;
	const minutes = parseInt(time[1]);
	const startMin = hourInMinutes+ minutes;
	let endMinutes = minutes + durationMinutes;
	let addHour = false;
	if(endMinutes > 60) {
		addHour = true;
		endMinutes -= 60;
	}
	const endTimeInMinutes = hourInMinutes + endMinutes + (addHour ? 60 : 0);
	return  startMin >= dayStartMin &&  endTimeInMinutes <= dayEndMin;
}

console.log(scheduleMeeting("7:00",15));     // false
console.log(scheduleMeeting("07:15",30));    // false
console.log(scheduleMeeting("7:30",30));     // true
console.log(scheduleMeeting("11:30",60));    // true
console.log(scheduleMeeting("17:00",45));    // true
console.log(scheduleMeeting("17:30",30));    // false
console.log(scheduleMeeting("18:00",15));    // false


console.log(1 +  "2" + "2"); // "122"
console.log(1 +  +"2" + "2"); // "32", 1 + 2 + "2"
console.log(1 +  -"1" + "2"); // "02" 1 + -1 + "2"
console.log(+"1" + "1" + "2"); // "112" 1 + "1" + "2" => "1" + "1" + "2"
console.log( "A" - "B" + "2"); // "NaN2", "A" - "B" = NaN + "2"
console.log( "A" - "B" + 2); // NaN, "A"-"B" = NaN - 2 = NaN


console.log(Number.isNaN("A" - "B")); // true
console.log(Number.isNaN("A")); // false
console.log(Number.isNaN(undefined)); // false
// isNaN convert to Number and determine is Nan,
// Number.isNan does not convert to number
console.log(isNaN("12")); // false
console.log(isNaN(undefined)); // true


// for (var i = 0; i < 5; i++) {
// 	// 这个会console.log 5,
// 	// 因为function call的时候for loop已经跑完了
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

for (let i = 0; i < 5; i++) {
	// 这个会console.log 0 1 2 3 4,
	// 因为用let i， 代表i只存在在这个for loop里
	setTimeout(function() { console.log(i); }, i * 1000 );
}

console.log(
	(function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
