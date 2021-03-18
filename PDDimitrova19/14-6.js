
function checkAge(age) {
    if ( age > 18 ){
        return true;
    }
    else {
        age = confirm("Did parents allow you?");
        return age;
    }
}

let myAge = checkAge(12);
alert(myAge);