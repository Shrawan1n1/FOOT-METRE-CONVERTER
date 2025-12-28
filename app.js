const foot = document.getElementById("foot");
const metre = document.getElementById("metre");
const body = document.getElementById("body");
const lbtn = document.getElementById("Lbtn");
const dbtn = document.getElementById("Dbtn");

foot.oninput = myfunc;
metre.oninput = myfunc1;
lbtn.onclick = dark;
dbtn.onclick = light;

function myfunc(){
    metre.value = foot.value*0.3048;
}
function myfunc1(){
    foot.value = metre.value*3.28084;
}
function dark(){
    body.style.backgroundColor="white";
    body.style.color="black";
    lbtn.style.display="none";
    dbtn.style.display="inline";

}
function light(){
    body.style.backgroundColor="black";
    body.style.color="white";
    dbtn.style.display="none";
    lbtn.style.display="inline";

}