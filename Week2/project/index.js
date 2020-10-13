'use strict';
/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

// Declare and select the element from Html file 
const sessionLength = document.getElementById('length-time');
const addTimeLength = document.getElementById('length-up');
const minusTimeLength = document.getElementById('length-down');
const displayMinutes = document.getElementById('minutes');
const displaySeconds= document.getElementById('seconds');
const playButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const timeUpText = document.getElementById('time-up');

let time = new Date();
let defaultMinutes = 25; 
sessionLength.innerText = defaultMinutes;// set the length of session 25 minutes by default
let countDown; // Reference for the countTimeDown function 

// set event listner and add and minuse functions to be fired when the buttons clicked
addTimeLength.addEventListener('click',()=>{
  sessionLength.innerText = ++defaultMinutes  ;
  time.setMinutes(defaultMinutes);
  time.setSeconds(0);
  setTime();
}); 
minusTimeLength.addEventListener('click', ()=>{
  if(defaultMinutes > 1){
    sessionLength.innerText = --defaultMinutes  ;
    time.setMinutes(defaultMinutes);
    time.setSeconds(0);
    setTime();
  }
});

// function to set time length to output display 
function setTime(){
  displayMinutes.innerText= time.getMinutes();
  displaySeconds.innerText=time.getSeconds();
};

// set event listner and play function to be fired when the start button clicked so the count down start timing
playButton.addEventListener('click', ()=>{
  countDown = setInterval( function countTimeDown(){ //count down function to start counting from the time set previously and decresing the seconds starting from 59 and when the final time is  00:00 it showes time is up 
    if (displaySeconds.innerText != 0) {
      displaySeconds.innerText--;
    } else if (displayMinutes.innerText != 0 && displaySeconds.innerText == 0) {
      displaySeconds.innerText = 59;
      displayMinutes.innerText--;
      if(displayMinutes.innerText <9){
        displayMinutes.innerText='0'+displayMinutes.innerText--;
      };
    }
    if (displaySeconds.innerText <= 9 ) {
      displaySeconds.innerText = '0' + displaySeconds.innerText;
    }
    if (displayMinutes.innerText == 0 && displaySeconds.innerText == 0) {
      displayMinutes.innerText = '00';
      timeUpText.style.visibility='visible';
      timeUpText.style.fontSize='35px';
      timeUpText.style.color='blue';
      clearInterval(countDown);
      enableButton();
    }
  }, 1000);
  disableButtons() ; // call disable function to disable all buttons play button is cliked 
  timeUpText.style.visibility='hidden'; 
 });
 // set event listner and pause function to be fired when the pause button clicked so the count down pause there  
pauseButton.addEventListener('click',()=>{
  clearInterval(countDown);
  enableButton();// call enable function to enable all buttons  when pause button is clicked 
});

// function to set the buttons to enable or disable  and called on play and pause functions .
function disableButtons() {
  playButton.disabled = true;
  addTimeLength.disabled = true;
  minusTimeLength.disabled = true;
};
function enableButton(){
  playButton.disabled=false;
  addTimeLength.disabled=false;
  minusTimeLength.disabled=false;
}