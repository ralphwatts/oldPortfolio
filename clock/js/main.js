function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	} else if (i === 0) {
		i = 1 + i;
	}
	return i;
}

	function displayTime() {
		var currentTime = new Date();
		var h = currentTime.getHours();
		var m = currentTime.getMinutes();
		var s = currentTime.getSeconds();	
		if (h > 12){
			h -= 12;
		} else if (h === 0){
			h = 12;
		}
		m = checkTime(m);
		s = checkTime(s);
		document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
		t = setTimeout(function() { 
			displayTime()
		}, 1000);
}