// BASIC FUNCTION 
function MiniExercise1(var1, var2, var3) {
    var element = document.getElementById("mini-exercise-1-output").innerHTML = 
        "Hello! " + var1 + " manipulate " + var2 + " DOM " + var3;
}

// CONDITIONAL IF
function MiniExercise2(candidateNumber) {
    if (isNaN(candidateNumber) || candidateNumber == "") {
        alert("Please enter a number.");
    }
    else if (candidateNumber < 10)
    {
        alert("x<10!");        
    }
    else {
        alert("great number!");
    }
}

// THE FOR LOOP
function MiniExercise3() {
    var cb1 = document.getElementById('cream-checkbox').checked;
    var cb2 = document.getElementById('sugar-checkbox').checked;
    var cb3 = document.getElementById('black-checkbox').checked;
    var coffee = document.forms[1];    
    var outText = "";
    var i = 0;

    if ( !(cb1 || cb2 || cb3) ) {
        alert('Incomplete order!');        
    }
    else {  
        for (i = 0; i < coffee.length; i++) {                 
            if (coffee[i].checked) {                
                outText = outText + coffee[i].value + "  ";
            }
        }

    document.getElementById("order").value = "Your coffee order is: " + outText;
    }    
}