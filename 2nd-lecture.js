let button = document.querySelector("button");

button.addEventListener("click", mathTablePrinter);

function mathTablePrinter(){
  let tableNumber = prompt("Enter table number:");
  let tableEntry = "";

  for(i=1; i<11; i++){
    tableEntry += tableNumber + " x " + i + " = " + tableNumber * i + "\n";    
  }

  let myDiv = document.getElementById("Text");
  myDiv.innerText = tableEntry; 
}