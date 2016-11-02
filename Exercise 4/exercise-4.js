// Get a reference to each button on the screen
var hideRed = document.getElementById("hideRed");
var showRed = document.getElementById("showRed");

var hideBlue = document.getElementById("hideBlue");
var showBlue = document.getElementById("showBlue");

var hideGreen = document.getElementById("hideGreen");
var showGreen = document.getElementById("showGreen");

var showAll = document.getElementById('showAll');
var hideAll = document.getElementById('hideAll');

// Get a reference to each box on the screen
var boxRed = document.getElementById('redBox');
var boxBlue = document.getElementById('blueBox');
var boxGreen = document.getElementById('greenBox');

// Create a JS array that contains the three box elements
var boxArray = [boxRed, boxBlue, boxGreen];

// Define a function called showBox that accepts one DOM element as an argument.  The function should set that element's CSS display property to "block"
function showBox(element) {
  element.style.display = 'block';
}

// Define a function called hideBox that accepts one DOM element as an argument.  The function should set that element's CSS display property to "none"
function hideBox(element) {
  element.style.display = 'none';
}

// Define a function called showBoxes that accepts an array of DOM elements as a single argument.  Loop through that array and set each element's CSS display property to "block"
function showBoxes(element) {  
  for (i = 0; i < element.length; i++) {
    element[i].style.display = 'block';
  }
}

// Define a function called hideBoxes that accepts an array of DOM elements.  Loop through that array and set each element's CSS display property to "none"
function hideBoxes(element) {  
  for (i = 0; i < element.length; i++) {
    element[i].style.display = 'none';
  }
}

// Add a click eventListener to each button.  
// For the first three buttons, invoke the showBox method with the corresponding DIV ("Show Green" shows the "greenBox" DIV, for example).
showRed.addEventListener("click", function(){ showBox(boxRed); });
showBlue.addEventListener("click", function(){ showBox(boxBlue); });
showGreen.addEventListener("click", function(){ showBox(boxGreen); });

// For the next three buttons, invoke the hideBox method
hideRed.addEventListener("click", function(){ hideBox(boxRed); });
hideBlue.addEventListener("click", function(){ hideBox(boxBlue); });
hideGreen.addEventListener("click", function(){ hideBox(boxGreen); });

// The "Show All" button invokes the showBoxes method
showAll.addEventListener('click', function(){ showBoxes(boxArray); });

// The "Hide All" button invokes the hideBoxes method
hideAll.addEventListener('click', function(){ hideBoxes(boxArray); });