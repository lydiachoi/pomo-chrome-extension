function init() {
  startTimer;
}

function startTimer() {
  var start = moment();

  setInterval(function () {
    var diff = moment().diff(start, 'seconds');
    document.getElementById("time").innerText = diff;
  }, 1000);
}

document.addEventListener('DOMContentLoaded', init);
