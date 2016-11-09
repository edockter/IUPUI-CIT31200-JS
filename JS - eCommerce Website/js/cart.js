var updateButton = document.getElementById('updateQuantities');
var outputBox = document.getElementById('quantity_items');

// query the DOM when the function is called -- in case the items change after declaring the variable
updateButton.addEventListener("click", 
            function(){ TotalQuantity(); });

var TotalQuantity = function() {
    var total = 0;

    // get all listing divs and text inputs on the form
    // do this here so we have fresh data 
    var productListings = document.getElementsByClassName('product_listing');
    var inputBoxes = document.querySelectorAll("input[type=text]");
    
    for (i = 0;  i < inputBoxes.length; i++) {
        var value = inputBoxes[i].value;

        // only add if it's an actual number -- don't let them order negative shirts
        if (value > 0) {
            total += parseInt(value);
        }
        else {
            inputBoxes[i].value = 0;    // erase the negative value
        }

        // hide the corresponding element if it's 0 or negative
        // make sure it's shown if it's positive, might want to re-add previously hidden items
        if (value <= 0) {
            productListings[i].style.display = 'none';
        }
        else {
            productListings[i].style.display = 'block';            
        }
    }

    // finally, output our total
    outputBox.textContent = total;
};