let showMessageProc = (message = "No value defined") => {
    console.log(message + " plus function body");
    console.log("1" + 1); //11
    console.log(1 + "1"); //11
    console.log(+"1" + 1); //2
}



showMessageProc("Hello function expressions and arrow function!");