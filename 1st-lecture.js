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