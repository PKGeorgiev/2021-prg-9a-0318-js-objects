function ask(question, yes, no)
{
    if (confirm(question)){
        yes();
    }else{
        no();
    }
}

ask("Do you agree to Terms and Conditions",
    () => alert("You can use our product"),
    () => alert("You can not use our product")
    );