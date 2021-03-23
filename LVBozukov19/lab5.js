let showMessageProc = (message = "No value defined") =>
{
    console.log(message + " Plus function body");
    console.log(1+"1"); // output 11
    console.log("1" + 1); // output 11
    console.log(+"1"+1); // output 2
}

showMessageProc("Hello function expressions and arrow expressions!");