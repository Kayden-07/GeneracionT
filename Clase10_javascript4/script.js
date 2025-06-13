//funcion normal
function saludar() {
    console.log("Hola")
}

//funcion anonimas ------------------
const saludo = function () {
    console.log("Hola")
}

//arrow function --------------------

const saludare = () => console.log("Hola");

const saludare2 = () => {
    console.log("Hola")
    console.log("adios")
}

const calcularPrecioFinal = (precio, descuento) => {
    let montoDescontado = precio * descuento;
    let precioFinal = precio - montoDescontado;
    return precioFinal;
}

//callback function -----------------
function saludarCallback(nombre, callback) {
    console.log("Hola " + nombre)
    callback() //Callback
    console.log("Esperando respuesta")
}

//               nombre,   callback (otra function)
// saludarCallback("Gino", () => {
//     setTimeout(() => { //setTimeout: permite ejecutar algo despues de un tiempo
//         console.log("Como estas?")
//     }, 3000);
// })

//Boton magico del helado -----------
// function elegirHelado(sabor, callback) {
//     console.log("Procesando tu pedido")
//     setTimeout(() => {
//         callback(sabor)
//     }, 4000);
// }

// function reaccionarASabor(sabor) {
//     if (sabor == "Chocolate") {
//         console.log("Mejor sabor del mundo")
//     } else if (sabor == "Vainilla") {
//         console.log("Sabor mas clasico")
//     } else {
//         console.log("Sabor interesante")
//     }
// }

//elegirHelado("Chocolate", reaccionarASabor)

//cadenas de texto-------------------

let cadena = "Hola mamasita rica"
console.log(cadena.length) //longitud de la cadena
console.log(cadena[5])
console.log(cadena.toLocaleLowerCase()) //todo minusculas
console.log(cadena.toLocaleUpperCase()) //todo mayusculas
console.log(cadena.indexOf("r")) //busca posicion de la letra
console.log(cadena.trim()) //saca espacios finales e iniciales
console.log(cadena.substring(5,9))
console.log(cadena.slice(7))