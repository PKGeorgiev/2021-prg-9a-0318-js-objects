let a = prompt("Enter your age.");
  
  function ageCheck(){
  if (Number(a) > 18){
    alert("true");
  }
  else {
    alert(confirm("Did your parents allow you?"));
  }
  }
  ageCheck();