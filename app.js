
let titulo = document.querySelector('h1')
titulo.innerHTML="Hora del Desafío"

function msgConsole(){
    console.log("El botón fue clicado")
}

function prompQuestion(){
    let pregunta = prompt('por favor indique una ciudad de Barsil')
    alert(pregunta)
}

function msgAlert(){
    alert("Yo amo JS")
}


function sumar() {
    let numero1 = parseInt(prompt('por favor indique el primer numero'))
    let numero2 = parseInt(prompt('por favor indique el segundo nuemro'))
    let resultado = numero1+numero2
    alert(`la suma de los numeros es ${resultado}`)
}