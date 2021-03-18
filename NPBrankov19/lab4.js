let showMessageProc = (message = "No value defined") => 

{

    console.log(message + " plus function body");

    console.log(1 + "1"); // Output 11

    console.log("1" + 1); // Output 11

    console.log(+"1" + 1); // Output 2

};

showMessageProc("Hello function expressions and arrow function!");