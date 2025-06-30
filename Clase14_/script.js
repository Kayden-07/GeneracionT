//Transformar al cientifico
//loco en un hacker moderno

// function crearPocion(magia, ingrediente) {
//     return `Pocion creada con ${magia} y ${ingrediente}`;
// }

// //Convertir a una funcion anonima
// //asignada a una constante
// const crearPocionAnonima = function (magia, ingrediente) {
//     return `Pocion creada con ${magia} y ${ingrediente}`;
// }

// //arrow 1° nivel
// const crearPocionArrow = (magia, ingrediente) => {
//     return `Pocion creada con ${magia} y ${ingrediente}`;
// }

// //arrow simplificada / solo una sola linea
// const crearPocionArrowSimple = (magia, ingrediente) => 
//     `Pocion creada con ${magia} y ${ingrediente}`

// console.log(crearPocionArrowSimple("hola", "ingre"))

// //representar algo del mundo real
// let auto = {
//     color: "rojo",
//     modelo: 2011,
//     marca: "bwm",
//     arrancar : function () {
//         console.log("El auto esta en marcha")
//     }
// }

// console.log(auto.color)

// let autos = [{
//     color: "rojo",
//     modelo: 2011,
//     marca: "bwm",
// }, {
//     color: "azul",
//     modelo: 2013,
//     marca: "toyota",
// }]

// //recorrer autos for .. of, para arrays     

// for (const auto of autos) {
//     console.log(auto.color)
// }

// for (const clave in auto) {
//     console.log(clave + " " + auto[clave])
// }

//manipulacion del DOM

// const tituloQuery = document.querySelector("#titulo")

// //acceder al contenido del texto
// tituloQuery.textContent = "jajaja"
// //cambiar color del titulo
// tituloQuery.style.color = "blue"
// tituloQuery.style.fontSize = "50px"
// tituloQuery.style.backgroundColor = "yellow"

// tituloQuery.classList.toggle

//classList vs Style

//addEventListener --> agrega un detector de eventos

//SINTAXIS BASICA
//elemento.addEventListener("tipoDeEvento", functionHandler)

const boton = document.querySelector("#saludar");
boton.addEventListener("click", () => {alert("Hola soy un evento")});