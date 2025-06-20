const btn1 = document.getElementById("btn-1");
const cont1 = document.getElementsByClassName("elm-container")[0];
let n = 1;

btn1.addEventListener("click", function() {
    const pElm = document.createElement("p");
    const pTxt = document.createTextNode("Paragraf " + n);
    pElm.append(pTxt);
    pElm.style.padding = "8px";
    pElm.style.backgroundColor = "#eaeaea";
    cont1.append(pElm);
    n++;
});