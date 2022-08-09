const banderaEncriptar=false;
const banderaDesencriptar=true;

var textoNormal= document.querySelector("#idTextoNormal");
var textoEncriptado = document.querySelector(".texto-encriptado");
var munieco = document.querySelector(".munieco");
var ningunMensaje = document.querySelector("#ningunMensaje");
var centrarTexto = document.querySelector("#centrarTexto");
var btnEncriptar = document.querySelector("#btnEncriptar");
var btnDesencriptar = document.querySelector("#btnDesencriptar");
var btnCopiar = document.querySelector("#btncopiar");

function encriptar (mensaje) {
    return coder(mensaje, banderaEncriptar);
}

function desencriptar(mensaje) {
    return coder(mensaje, banderaDesencriptar);
}

function coder(mensaje, proceso) {
    let Codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    mensaje = mensaje.toLowerCase();
    
    for (let i = 0; i < Codigo.length; i++)
    {
        mensaje = mensaje.replaceAll(Codigo[i][+proceso], Codigo[i][+(!proceso)]);
    }

    return mensaje;
}

//Funciones de Botones.
function btnEncriptarClick() {
    if (textoNormal.value != "") {
        switchMensaje(false);
        textoEncriptado.innerHTML = encriptar(textoNormal.value);
    } else {
        switchMensaje(true);
    }
}

function btnDesncriptarClick() {
    if (textoNormal.value != "") {
        switchMensaje(false);
        textoEncriptado.innerHTML = desencriptar(textoNormal.value);
    } else {
        switchMensaje(true);
    }
}

function btnCopiarClick(event) {
    navigator.clipboard.writeText(textoEncriptado.innerHTML);
}

//Funciones varias
function switchMensaje(estado) {
    if (estado) {
        var displayPrimario = "block";
        var displaySecundario = "none"
    } else {
        var displayPrimario = "none";
        var displaySecundario = "block"
    }

    munieco.style.display = displayPrimario;
    textoEncriptado.style.display = displayPrimario;
    ningunMensaje.style.display = displayPrimario;
    centrarTexto.style.display = displayPrimario;
    btnCopiar.style.display = displaySecundario;
    textoEncriptado.style.display = displaySecundario;
}

//Asignación de funciones a los botones.
btnEncriptar.onclick = btnEncriptarClick;
btnDesencriptar.onclick = btnDesncriptarClick;
btnCopiar.onclick = btnCopiarClick;