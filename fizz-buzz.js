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
    var outString = i;

    if (i % 15 == 0) 
    {
        console.log("fizzbuzz");
    }
    else if (i % 3 == 0)  
    {
        console.log("fizz");
    }    
    else if (i % 5 == 0)
    {
        console.log("buzz");
    }
    else 
    { 
        console.log(i);
    }   
}