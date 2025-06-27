// let source = document.querySelector("#source")
// let destination = document.querySelector("#destination")

// let auxiliar = source.textContent
// source.textContent = destination.textContent
// destination.textContent = auxiliar

//manipulacion de textos y contenidos, y css

let div = document.getElementById("cuadro")
// div.style.width = "100px"
// div.style.height = "100px"

div.classList.add("square")
div.classList.toggle //si esta lo saca, si no esta lo pone.Para la toma de decisiones

// setTimeout(() => { //hacer algo despues de un tiempo
//     div.classList.toggle("square")
// }, 3000)

//div.classList.contains //true/false

setInterval(() => { //para que cada cierto tiempo se ejecute algo
    div.classList.toggle("square")
}, 1000);

//crear nodo
let nuevo = document.createElement("div")
//agrego contenido
nuevo.textContent = "Hola, soy el nuevo div"
//puedo agregegar estilos
//insertarlo en el DOM
document.body.appendChild(nuevo)

console.log(div.innerHTML)
div.innerHTML = "<em>muy importante</em>"

//crear lista

let lista = document.createElement("ul")
let frutas = ["Manzana", "Banana", "Uva"];
for (const fruta of frutas) {
    let li = document.createElement("li")
    li.textContent = fruta 
    lista.appendChild(li)
}

document.body.appendChild(lista)

let segundoElemento = lista.children[0]
segundoElemento.innerHTML = "<strong>Banana</strong>"

