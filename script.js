"use strict"

// Level One
const displayContent = document.getElementById("displayContent");
const helloBtn = document.getElementById("helloBtn");

helloBtn.onclick = () => {
    displayContent.innerHTML = "Hello, world!";
}

// Level Two
const displayInput = document.getElementById("displayInput");
const submitBtn = document.getElementById("submitBtn");
const inputName = document.getElementById("inputName");
const helloBtn2 = document.getElementById("helloBtn2");

submitBtn.onclick = () => {
    displayInput.innerHTML = inputName.value;
}

helloBtn2.onclick = () => {
    if (inputName.value === "") {
        displayInput.innerHTML = "Please input a name below.";
    } else {
        displayInput.innerHTML = "Hello, " + inputName.value;
    }
}

// Level Three

const displaySelected = document.getElementById("displaySelected");
const nameSelected = document.getElementById("nameSelected");
const nameKeys = document.getElementById("nameKeys");

const helloBtn3 = document.getElementById("helloBtn3");
const goodbyeBtn = document.getElementById("goodbyeBtn");

nameKeys.onclick = event => {
    if(event.target.type == "submit") {
        nameSelected.value = event.target.innerHTML;
    }
}

helloBtn3.onclick = () => {
    displaySelected.innerHTML = "Hello " + nameSelected.value;
}

goodbyeBtn.onclick = () => {
    if (goodbyeBtn.innerHTML === "Good bye") {
        displaySelected.innerHTML = "Good bye " + nameSelected.value;
        goodbyeBtn.innerHTML = "Clear";
    } else {
        displaySelected.innerHTML = "";
        nameSelected.value = "";
        goodbyeBtn.innerHTML = "Good bye";
    }
}