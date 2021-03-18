function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
};
   
let showOk = () => {
    alert("You agreed.");
};

let showCacel = () => {
    alert("You canceled the execution.");
};

ask( "Do you agree?", showOk, showCacel);
   