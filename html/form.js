window.onload = function(){
	console.log('document loaded');


};

function getFormvalue(){
	// let fname = document.getElementsByName('fname')[0].value;
	// let lname = document.getElementsByName('lname')[0].value;
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;
	console.log(fname,lname);
	return {fname, lname};
}


setTimeout((timeout => { // 不一定需要 (timeout) =>
	console.log('123');
}),1000);
