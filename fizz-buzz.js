// Convoluted but fun
for (i = 1; i <= 100; i++) {    
    var outString = "";

    if (i % 3 == 0) 
    {
        outString = "fizz";
      
        if (i % 5 == 0) 
        {
            outString += "buzz";
        }            
    }
    else if (i % 5 == 0) 
    {
        outString = "buzz";
    }
    else if (i %3 != 0) { 
            outString = i;
    }    
    
    console.log(outString);
}

// Simple but boring 
for (i = 1; i <= 100; i++) {    
    if (i % 15 == 0) 
    {
        console.log("fizzbuzz");
    }
    else if (i % 3 === 0)  
    {
        console.log("fizz");
    }    
    else if (i % 5 === 0)
    {
        console.log("buzz");
    }
    else 
    { 
        console.log(i);
    }   
}

// Code Golf
for (i = 1; i <= 100; i++) {
    (i % 3 === 0) ? ((i % 5 === 0) ? console.log("fizzbuzz") : console.log('buzz'))  : ((i % 5 === 0) ? console.log('fizz') : console.log(i));
}

// Xxxtreme unreadable Code Golf
var o;
for (i = 1; i <= 100; i++) {(i%3==0)?((i%5==0)?o='fizzbuzz':o='buzz'):((i%5==0)?o='fizz':o=i); console.log(o);}

// Best solution
var o;
for (i = 1; i <= 100; i++) {
    o='';    
    if (i % 3 == 0) { o += 'Fizz'; } 
    if (i % 5 == 0) { o += 'Buzz'; }
    console.log(answer || i);     
}