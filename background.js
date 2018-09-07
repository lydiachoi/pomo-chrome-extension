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
	setInterval(function() {
	    var difference = moment().diff(start, 'seconds');
	    var time = moment().startOf("day").seconds(difference).format("m:ss");
	    chrome.runtime.sendMessage({
	    	"command": "updateTime",
	    	"time": time
	    });
  }, 1000);
  currentState = "pomodoro";
}

function updateTime(diff) {
  console.log("time updates");
  chrome.runtime.sendMessage({
    "command:": "updateTime", 
    "time": diff
  }); 
}




