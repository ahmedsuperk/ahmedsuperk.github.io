/*
let b = document.querySelector('button');

b.addEventListener('click', showMsg);

function showMsg() {
    alert("Hello I am Watching you,I know where you live! :)");
}

let bb = document.getElementById('me');

bb.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt();
    alert("My name is " + name);
}
*/

let b = document.querySelector('button');

b.addEventListener('click', mathTablePrinter);

function inputMsg() {
    let tableNumber = prompt("Enter a table number:");
    
    let tableEntry = "";

    for (i = 1; i < 11; i++){
        tableEntry += tableNumber + " x " + i + " = " + tableNumber * i + "\n";        
    }

    alert(tableEntry);
}