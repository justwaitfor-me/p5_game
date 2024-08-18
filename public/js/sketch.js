/**
 * A interactive canvas that responds to mouse presses and releases.
 * 
 * The canvas displays a circle that grows and shrinks based on the duration of the mouse press.
 * When the mouse is pressed, a timer starts, and when the timer reaches 6 seconds, the circle stops growing.
 * If the mouse is released before the timer reaches 6 seconds, the circle resets.
 * 
 * The canvas also displays a level indicator and a message when the timer reaches 6 seconds.
 */

let mouseDown = false; // true = no jittering (pause)
let mouseDownTime = 0;
let mouseDownDuration = 0;
const mouseLimit = 6; // seconds

let paddingx = 0;
let paddingy = 0;

const trix = 125;
const triy = 350;

let stop = 0;

/**
 * Sets up the canvas and its parent element.
 */
// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Update the stop variable from the cookie when the page loads
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent(document.querySelector('main'));
  var savedLevel = getCookie("level");
  if (savedLevel !== null) {
    stop = parseInt(savedLevel);
  }
}

/**
 * Draws the canvas and updates its state based on the mouse press and release events.
 */
function draw() {
  background(0, 0, 0);
  if (mouseDown === true) {
    mouseDownDuration = (mouseLimit - (millis() - mouseDownTime) / 1000).toFixed(0);
  }

  fill(255, 255, 255);
  rect(10, 10, 130, 40, 6, 6);
  fill(0, 0, 0);
  textSize(26);
  text(`Level ${stop}`, 25, 19, 130, 40);

  setCookie("level", stop, 30);

  if (stop === 0) {
    if (mouseDown === false) {
      paddingx = random(15);
      paddingy = random(15);
    } else if (mouseDown === true && mouseDownDuration >= 0) {
      paddingx = 0;
      paddingy = 0;

      noStroke();
      fill(255, 255, 255);
      rect(windowWidth / 2 + 120, windowHeight / 2 - 430, 250, 100, 30);
      triangle((windowWidth / 2 - 20) + trix, (windowHeight / 2 + 40) - triy, (windowWidth / 2) + trix, (windowHeight / 2 - 20) - triy, (windowWidth / 2 + 30) + trix, (windowHeight / 2 + 20) - triy);
      fill(0, 0, 0);
      textSize(32);
      text("Yo, Thx!", windowWidth / 2 + 185, windowHeight / 2 - 370);
      textSize(12);
      text(`(${mouseDownDuration})`, windowWidth / 2 + 185, windowHeight / 2 - 350);
    }

    if (mouseDownDuration >= 0) {
      fill(255, 255, 255);
      circle(windowWidth / 2 - paddingx, windowHeight / 2 - paddingy, 600);
      fill(0, 0, 0);
      circle(windowWidth / 2 - paddingx, windowHeight / 2 - paddingy, 120);
    } else {
      stop = 1;
    }
  } else if (stop === 1) {
    // Level 1
  }
}

/**
 * Handles the mouse press event.
 * 
 * @example
 * Click and hold the mouse button to start the timer and grow the circle.
 */
function mousePressed() {
  mouseDownTime = millis();
  mouseDown = true;
}

/**
 * Handles the mouse release event.
 * 
 * @example
 * Release the mouse button to reset the timer and circle.
 */
function mouseReleased() {
  mouseDown = false;
  mouseDownDuration = 0;
}

document.addEventListener("mousedown", mousePressed);
document.addEventListener("mouseup", mouseReleased);