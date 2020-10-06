/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/
'use strict';
const catImage = document.querySelector("img");//Create a variable to store a reference to the img.
catImage.style.left = '0px'; //Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
let catPosition = 0;
let danceCat = true;
let interval = setInterval(catWalk, 50);//Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!

function catWalk() {
  catPosition += 10;
  catImage.style.left = catPosition + 'px';//moves the cat 10 pixels to the right of where it started,
 
  if (danceCat && catPosition >= (window.innerWidth - catImage.width) / 2) {
    clearInterval(interval); // stop the walking 
    catImage.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";//When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
    setTimeout(() => {
      catImage.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
      danceCat =false;
      interval = setInterval(catWalk, 50);
    }, 5000); // set time for 5 seconds then the cat start walking 
  }
  if (catPosition > window.innerWidth ) {
    catImage.style.left = '0';
    danceCat = true;
    catPosition = 0;
  }// When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
  
}; //Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

