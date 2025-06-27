console.log(document)

let nodo = document.getElementById("saludo")
console.log(nodo)
console.log(nodo.textContent)

//cambiar texto despues de unos 3000ms

setTimeout(() => { //hacer algo despues de un tiempo
    nodo.textContent = "Texto cambiado"
}, 3000)

let frutas = document.getElementsByClassName("fruta")
console.log(frutas)
console.log(frutas[0].textContent)

//mostrar todos los elementos que devuelve frutas
for (const fruta of frutas) { //FOR... OF para arrays y FOR IN para objetos
    console.log(fruta.textContent)
}

//query selector (trae la primera que coincida)

document.querySelector("#saludo") //POR ID
document.querySelector(".fruta") //PARA CLASES
document.querySelector("p") //Primera etiqueta

// query selectoAll
document.querySelectorAll(".fruta")