// Here is an array of US State Capitals to use
var capitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"];

// Using JavaScript, get the contents of the "cities" div and convert it into an array of strings (each city will be an element in the array)
var cities = document.getElementById('cities').innerHTML.split(', ');



// Loop through the array of cities.  Compare each element to the array of capitals.  If a city is NOT a state capital, update the HTML output to leave out that city.  (Note: formatting, commas, etc. doesn't count -- just get the cities to display.)
function compareCities(capitalsArray, citiesArray) {
  var outString = '';
  
  for (var i = 0; i < citiesArray.length; i++) {
    for (var j = 0; j < capitalsArray.length; j++) {      
      if (capitalsArray[j].toLowerCase() === citiesArray[i].toLowerCase()) {        
        outString += citiesArray[i] + ', ';
        continue;       
      }
    }    
  }

  // Remove that last ', ' -- easier than deterministically adding it
  outString = outString.slice(0, -2); 
  
  // Output result to form 
  document.getElementById('cities').innerHTML = outString;
}

compareCities(capitals, cities);