// "use strict";

function uno() {
    document.querySelector("#pantaya").innerHTML += "1";
}
function dos() {
    document.getElementById("pantaya").innerHTML += "2";
}
function tres() {
    document.getElementById("pantaya").innerHTML += "3";
}
function cuatro() {
    document.getElementById("pantaya").innerHTML += "4";
}
function cinco() {
    document.getElementById("pantaya").innerHTML += "5";
}
function seis() {
    document.getElementById("pantaya").innerHTML += "6";
}
function siete() {
    document.getElementById("pantaya").innerHTML += "7";
}
function ocho() {
    document.getElementById("pantaya").innerHTML += "8";
}
function nueve() {
    document.getElementById("pantaya").innerHTML += "9";
}
function punto() {
    document.getElementById("pantaya").innerHTML += ".";
}
function cero() {
    document.getElementById("pantaya").innerHTML += "0";
}

function borrar() {
    document.getElementById("pantaya").innerHTML = "";
}

function sumar() {
    pantaya.innerHTML[pantaya.innerHTML.length-1] <= 9 ? pantaya.innerHTML += "+" : pantaya.innerHTML += "";
}

function restar() {
    pantaya.innerHTML[pantaya.innerHTML.length-1] <= 9 ? pantaya.innerHTML += "-" : pantaya.innerHTML += "";
}

function dividir() {
    pantaya.innerHTML[pantaya.innerHTML.length-1] <= 9 ? pantaya.innerHTML += "/" : pantaya.innerHTML += "";
}

function multiplicar() {
    pantaya.innerHTML[pantaya.innerHTML.length-1] <= 9 ? pantaya.innerHTML += "*" : pantaya.innerHTML += "";
}

function resultado() {
    document.getElementById("pantaya").innerHTML = eval(document.getElementById("pantaya").innerHTML);
}

