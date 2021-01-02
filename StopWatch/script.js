var hourNumber = document.getElementById('hour');
var minuteNumber = document.getElementById('minute');
var secondNumber = document.getElementById('second');

var startBtn = document.getElementById('startBtn');
var pauseBtn = document.getElementById('pauseBtn');
var resetBtn = document.getElementById('resetBtn');

hourNumber.innerText =  0;
minuteNumber.innerText = 0 ;
secondNumber.innerText = 0;


function startClock() {

    timerInterval = setInterval( function() {
     
        secondNumber.innerText = Number(secondNumber.innerText) + 1;
        if (secondNumber.innerText == 60) {
            secondNumber.innerText = 0;
            minuteNumber.innerText = Number(minuteNumber.innerText) +1;
        }
        if (minuteNumber.innerText == 60) {
            minuteNumber.innerText = 0;
            hourNumber.innerText = Number(hourNumber.innerText) +1;
        }
    }, 1000)
}


function resetClock() {
    hourNumber.innerText =  0;
    minuteNumber.innerText = 0 ;
    secondNumber.innerText = 0;
    clearInterval(timerInterval)
}
function pasueClock() {
    clearInterval(timerInterval)
}


startBtn.addEventListener('click', startClock);
pauseBtn.addEventListener('click', pasueClock);
resetBtn.addEventListener('click', resetClock);



