let numeroSecreto = 0;
let intentos = 0;
let registro = [];
let rangoMax = 10;

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego de número secreto");
    asignarTextoElemento('p', `indica un numero de 1 al ${rangoMax}`);
    numeroSecreto = generarNUmeroSecreto()
    intentos = 1;
}
condicionesIniciales();
function verficarIntento() {
    let elemento = document.getElementById('valorUsuario')
    let numeroUsuario = parseInt(elemento.value)



    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p', `genial, encontraste el número en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el número secreto es menor')
        } else {
            asignarTextoElemento('p', 'el número secreto es mayor')
        }
        intentos++
        limpiarElemento();
    }
}

function asignarTextoElemento(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;

}

function generarNUmeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroGenerado)
    console.log(registro)
    //Si ta sorteamos todos los numero
    console.log(registro.length ,  rangoMax)
    if (registro.length == rangoMax) {
        asignarTextoElemento('p', 'ya se sortearon todos los números posible')
    }
    else {
        //si el numero generado esta en la lista
        if (registro.includes(numeroGenerado)) {
            return generarNUmeroSecreto()

        } else {
            registro.push(numeroGenerado)
            return numeroGenerado; ge
        }
    }

}

function limpiarElemento() {
    document.querySelector('#valorUsuario').value = ""

} function reiniciarJuego() {

    condicionesIniciales();
    limpiarElemento();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}