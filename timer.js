function init() {
  console.log("initialized");
  addMessageListeners();
  console.log("after listener");
  startTimer();
}

function startTimer() {
  console.log("gets here 2");
  chrome.runtime.sendMessage({"command": "startTimer"}, 
    function(response) {
      console.log(response.message);
    });
}

function addMessageListeners() {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.command === "updateTime") {
        console.log("gets here");
        var time = request.time;
        document.getElementById("current-time").innerText = time;
      }
    }
  );
}

document.addEventListener('DOMContentLoaded', init);
