var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");
outputDiv.innerText="goli";

console.log(txtInput);



function clickHandler() {
    console.log("clicked! ");
    console.log("input", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)



   