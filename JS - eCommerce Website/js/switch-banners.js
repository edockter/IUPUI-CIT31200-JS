// Get all of the buttons
var suitsButton = document.getElementById('promo_button1');
var shoesButton = document.getElementById('promo_button2');
var shirtButton = document.getElementById('promo_button3');
var pantsButton = document.getElementById('promo_button4');
var allButtons  = document.getElementsByClassName('promo_button');

// And all of the banners
var suitsBanner = document.getElementById('promo1');
var shoesBanner = document.getElementById('promo2');
var shirtBanner = document.getElementById('promo3');
var pantsBanner = document.getElementById('promo4');
var allBanners  = document.getElementsByClassName('promo');

// Add the 4 click listeners
suitsButton.addEventListener("click", function(){ switchBanner(suitsBanner); });
shoesButton.addEventListener("click", function(){ switchBanner(shoesBanner); });
shirtButton.addEventListener("click", function(){ switchBanner(shirtBanner); });
pantsButton.addEventListener("click", function(){ switchBanner(pantsBanner); });

// Hide all banners, then show the 1 passed in
function switchBanner(newBanner) {
    // hide all of the banners
    for (i = 0; i < allBanners.length; i++) {
        allBanners[i].style.display = 'none';
    }

    // show only the one we want
    newBanner.style.display = 'block';
}