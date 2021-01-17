function printTime(i){
	setTimeout(function() {
		var date = new Date()
		var hours = date.getHours()
		var minutes = date.getMinutes()
		var seconds = date.getSeconds()
		console.log(hours,":",minutes,":",seconds);
	}, 1000 * i);
	
}


for (var i = 0; i<=1000; i++) {
	printTime(i)
}

