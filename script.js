"use strict"

const displayContent = document.getElementById("displayContent");
const helloBtn = document.getElementById("helloBtn");

helloBtn.onclick = () => {
    displayContent.innerHTML = "Hello, world!";
}