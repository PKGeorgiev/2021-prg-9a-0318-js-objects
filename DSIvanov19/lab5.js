function showMessage(message) {
    if(!message) { // logical not "!" - could be "message == undefined"
        message = "No value defined!";
    } console.log(message);
}   showMessage();