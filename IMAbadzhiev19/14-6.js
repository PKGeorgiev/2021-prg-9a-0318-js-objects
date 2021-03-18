function checkAge(age)
{
    if(age > 18)
    {
        return true;
    }
    else{
        confirm("Did parents allow you?");
    }
}