function displayValue(val){
    document.getElementById("enter").value=document.getElementById("enter").value+val;
}
function clearContent(){
    document.getElementById("enter").value=" ";
}

function Calculate(){
    var userInput=document.getElementById("enter").value;
    var result=eval(userInput);
    document.getElementById("enter").value=result;
}