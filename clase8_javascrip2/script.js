//simular : nivel de vida
//jugador tiene +80% de energia 
// --> el jugador esta al 100%
// energia > 40 --> energia en zona media
// energia < 40 --> enegia agotada

let energia = 60 // asignacion
console.log(18 == "18") //comparacion de valor
console.log(18 === "18") //compara valor y tipo de dato

// if (energia > 80) {
//     console.log("El personaje esta al 100% de su energia")
// } else if (energia > 40) {
//     console.log("energia en zona media")
// } else {
//     console.log("Energia agotada")
// }

// var numero = "18e"

// if (18 == numero) {
//     console.log(numero % 5)
// }

// let edad = 20
// let tieneDNI = true

// if (edad >= 18 && tieneDNI) {
//     console.log("puede ingresar")
// } else {
//     console.log("no puede ingresar")
// }

// if (!tieneDNI) {
//     console.log("no puede ingresar")
// }

//AND &&
// true && true = true
// true && false = false

// OR ||
// true || true = true
// true || false = true
//false || false = false

// NOT !
//!false = true
//!true = false

// let edad = 20
// let acompañado = true
// let tieneEntrada = true

// if ((edad >= 18 || acompañado) && tieneEntrada) {
//     console.log("Podes ingresar al evento")
// } else {
//     console.log("NO podes ingresar al evento")
// }

// if (!tieneEntrada) {
//     console.log("NO podes")
// }

//---------------------------
let letra = "A"

switch (letra) {
    case "B":
        console.log("La letra es B")
        break;

    case "A":
        console.log("La letra es A")
        break;

    default: //si no es ningun caso va por la default
        console.log("No coincide con letras conocidas") 
        break;
}