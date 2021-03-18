let showMessageProc= (message="No value definded")=>
{
    console.log(message+" plus function body");
    console.log("1" + 1);//output 11
    console.log(1 + "1");//output 11
    console.log(+"1" + 1);//output 2
  
}

showMessageProc("Hello function expression and arrow function!");