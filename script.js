/**
 * Created by Нафтуся on 22.03.2016.
 */
var currentTime = 0;
var count = 0;
function startCounter() {
    cDate = new Date ();
    currentTime = cDate.getTime();
    count = currentTime - BEGIN_TIME;
};

var startStopChange = 'Start';
var pauseTimeDisplay = 0;
var BEGIN_TIME = 0;
function startOn() {
    date = new Date();
    BEGIN_TIME = date.getTime() - pauseTimeDisplay;
    on_timer = setInterval("this.startCounter()", 8);
    on_display = setInterval("this.view_display()", 10);
    startStopChange = ( startStopChange == 'Start' ? 'Pause' : 'Start');
    document.getElementById('startPause').setAttribute("value", startStopChange);
};
var on_timer;
var on_display;
function startOff() {
    pauseTimeDisplay = currentTime - BEGIN_TIME;
    clearInterval(on_timer);
    clearInterval(on_display);
    startStopChange = ( startStopChange == 'Start' ? 'Pause' : 'Start');
    document.getElementById('startPause').setAttribute("value", startStopChange);
};

function onOff() {
    if (startStopChange == 'Start') {
        return startOn();
    } else {
        return startOff();
    }
};

var mls =0;
function clearСlock() {
    startStopChange = 'Start';
    count = 0;
    mls =0;
    pauseTimeDisplay = 0;
    clearInterval(on_timer);
    clearInterval(on_display);
    document.getElementById('display').value = "00:00:00.";
    document.getElementById('displayMls').value = "000";
    document.getElementById('startPause').setAttribute("value", startStopChange);

};
function view_display() {
    var t = parseInt(count);
    var milliseconds = Math.floor((t % 1000)) + 000;
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    milliseconds = (milliseconds < 10 ? '00' + milliseconds : milliseconds);
    milliseconds = (milliseconds < 100 ? '0' + milliseconds : milliseconds);
    seconds = (seconds < 10 ? '0' + seconds : seconds);
    minutes = (minutes < 10 ? '0' + minutes : minutes);
    hours = (hours < 10 ? '0' + hours : hours);
    var timerId = hours + ":" + minutes + ":" + seconds + ":";
    document.getElementById('display').value = timerId;
    document.getElementById('displayMls').value =  milliseconds;
    mls = milliseconds;
};

document.getElementById('startPause').addEventListener("click", onOff);
document.getElementById('reset').addEventListener("click", clearСlock);

