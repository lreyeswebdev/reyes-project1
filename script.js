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

submitBtn.onclick = () => {
    displayInput.innerHTML = inputName.value;
}