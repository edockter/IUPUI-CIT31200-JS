// Write a JavaScript function that returns true if a single value passed to it is even
function checkNumber(number) {
  if (number % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

// Get the contents of the "myNumber" div and pass that value to your function
var myNumberDiv = document.getElementById('myNumber');
var test = checkNumber(myNumberDiv.innerHTML);


// If the function returns true, add the "evenNumber" CSS class to the "myNumber" div; otherwise, add the "oddNumber" class to the "myNumber" div
((test) ? myNumberDiv.className = 'evenNumber' : myNumberDiv.className = 'oddNumber');

// Change the number in the "myNumber" div in the HTML panel to see if your JavaScript works for both even and odd numbers
// Done