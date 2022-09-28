const display = document.querySelector("#display");//refrence
const buttons = document.querySelectorAll("button");//reference

buttons.forEach((button) => {
  button.onclick = () => {//for each button there is click listener
    if (button.id == "clear") 
      display.innerText = "";
     else if (button.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if ( button.id == "equal") 
      display.innerText = eval(display.innerText);
      else 
      display.innerText += button.id;
    
  };
});

 //#0f0c29b5
 //#d17624