#JAVASCRIPT WARM UP
##Please make sure to do the readings and watch the videos listed in the resource section of our course site. Over time I have realized that the upcoming javascript exercise can be quite challenging so I have created this warm up exercise that should help provide the necessary building blocks to complete it.

###This exercise is worth 8 extra credit points.
I strongly recommend referencing *Eloquent Javascript* which is a free book on the web that you can access here: [Eloquent Javascript](http://eloquentjavascript.net/) 
The links that I reference in this document come from this main reference page: [W3 Schools JavaScript](http://www.w3schools.com/js/js_functions.asp) 
With each of the examples below there is a **try it** button which will open an online editor that will allow you to run and manipulate the code. If you make any modification you will have to click the **Submit Code** button in the middle towards the top to refresh the page with the changes. Please complete the **THREE** mini-exercises as **separate web pages**, host them on the server and submit the exercise as we have the rest of our exercises and assignments to this point.

##Basic Function
####Very Basic Function that calls an alert box.
Please take a close look at how the function **myFunction()** is called by the button on the page: [Function Example](http://www.w3schools.com/js/tryit.asp?filename=tryjs_function1) 
Another basic function that returns a value: [Return Example](http://www.w3schools.com/js/tryit.asp?filename=tryjs_function_return)
Pass arguments to a function. myFunction now expects arguments and then takes them and places them in the alert message. [Passing Arguments Example](http://www.w3schools.com/js/tryit.asp?filename=tryjs_function2)

###Mini-exercise 1 (2points)
####Create a basic page similar to the “Pass arguments to a function” example
[Pass Arguments to a Function Example](http://www.w3schools.com/js/tryit.asp?filename=tryjs_function2)
Modify it so that a similar but different sentence is created using three variables rather than two. You may just place the javascript internally on the page you do not have to use an external js file for all of these mini-exercises.

##Conditional If statement
Next take a look at this function which will display the text “Good Day” if the time is less than 20:00 or in other words earlier than 8:00pm. [If-Then Example](http://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthen)
(notice that the .getHours() is a builtin function for javascript you can see more of them here: [Built-In Javascript Functions](http://www.javascriptbank.com/popular-built-in-javascript-functions.html)
As a next step we build a little more complexity by using the “If then else conditional”
[If-Then-Else Example](http://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthenelse)
This is another example that uses a very simple check to see if text field is filled out or not:
[Check Text Field Example](http://www.w3schools.com/js/js_validation.asp)(one thing to note is that the || indicates “or”)

###Mini-exercise 2(2 points)
####Create a basic page similar to the if then else conditional example
[If-Then-Else Example](http://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthenelse) 
Create a function that receives a number/integer of your choice as an argument. Make a conditional if then statement that produces an alert that states “x<10!” if the number is less than 10 (x<10) or else an alert that states “great number!” if it is above.

##The For Loop
This for loop takes an array (sequence or list of values) held by the variable cars. It starts with the BMW in position 0 and writes it on the page and then moves to the next position of the array prints that one until it reaches the end. 
[For Loop Example](http://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for)
This is another example that incorporates the use of a button: [For Loop with Button](http://www.w3schools.com/js/tryit.asp?filename=tryjs_fornext)
This one could be useful for the upcoming exercise notice how it determines whether a checkbox is checked or not. Notice how the id is used with the checkbox to carry out the functionality.
[Checkbox Example](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_checked)
This example uses a checkbox and a for loop to check to see which checkbox is checked.
[Checkbox Order Example](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_order)

###Mini-exercise 3(4 points)
####Augment the code from the last example
[Checkbox Order Example](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_order) 
Edit so that it has a third check box which is for an order of black coffee and create an alert statement that will produce the message “Incomplete order!” if no check boxes are selected.