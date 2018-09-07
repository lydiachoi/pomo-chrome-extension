var states = {
  "off": "Lorem ipsum",
  "pomodoro": "Lorem ipsum"
};

var currentState = "off"; 

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.command == "startTimer" && currentState == "off") {
			var start = moment();
			startTimer(start);
			sendResponse({message: "Timer started."});
		}
	}); 

function startTimer(start) {
	var start = moment(); 
	var timer = setInterval(function() {
		var difference = moment().diff(start, 'seconds');
		console.log(difference)
		if (difference >= 10) {
			stopTimer(timer);
		}
		updateTime(difference);

  }, 1000);
  currentState = "pomodoro";
}

function stopTimer(timer) {
	clearInterval(timer);
	notifyUser();
}

function notifyUser() {
	var opts = {
		"type": "basic", 
		"title": "Break Time",
		"message": "Time for a break!",
		"iconUrl": "icon.png"
	};
	var idBase = "pomodoro";
	var id = idBase + new Date().getTime();
	
	chrome.notifications.create(id,opts,function() {
		console.log(idbase + "notification created");
	});
}

function updateTime(difference) {
	var time = moment().startOf("day").seconds(difference).format("m:ss");

  chrome.runtime.sendMessage({
		"command": "updateTime",
		"time": time
	});
}