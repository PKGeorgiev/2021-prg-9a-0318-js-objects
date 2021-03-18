/*14.6

function min(a) {

    if (a > 18) {
        return true;
    }
    else {
        alert("Did parents allow you?");
    }

}
*/

/*14.7
ask("Do you agree?",

    () => alert("You agreed."),

    () => alert("You canceled the execution.")

)
*/





/*14.8

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

let showOk = () => {
    alert("You agreed.");
};

let showName=()=>{
    alert("Your name is .....");

}

ask("Do you agree?", showOk, showName)
*/


