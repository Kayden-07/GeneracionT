// fetch("url")
//     .then(res => res.json())
//     .then(data => console.log(data))

// //syntactic sugar
// //es para recibir de APIS, await se usa dentro de las funciones asincronicas
// async function traer() { //funcion asincronica(async), las asincronicas siempre devuelve promesas
//     try { //se ejecuta todo lo positivo
//         let resp = await fetch("url") //await espera la respuesta antes de seguir
//         let data = await resp.json() //convierte la respuesta en formato json
//         console.log(data) //muestra los datos que llegan convertidos
//     } catch { //se ejecuta lo negativo, captura errores
//         console.error("Ocurrio un error:", error)
//     }
// }

const usuario = {
    "nombre": "Ana",
    "edad": 23,
    "esActiva": 1,
    "hobies": ["leer", "deporte"]
}

//obj a Json
const texto = JSON.stringify(usuario)
console.log(texto)

//Json a obj
const obj = JSON.parse(texto)
console.log(obj)

//importar funciones y variables

// import { suma, PI } from "./otro.js";

// console.log(suma(1,5))

// console.log(PI)

// import data from "./data.json"

// console.log(data)