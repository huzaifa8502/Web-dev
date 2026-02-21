const display = document.getElementById("display");

function appendToDisplay (input){
    display.value += input;
    console.log(display.value);
}

function clearDisplay(){
    display.value="";
}
function calculate(){
    display.value=eval(display.value);
}
