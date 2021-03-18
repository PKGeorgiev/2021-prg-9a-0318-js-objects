let ask=(question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

let showOk = () => {
    alert("You agreed.");
};

let showCancel = () => {
    alert ("You canceled the execution.");
};

aks ("Do you agree?", showOk, showCancel);