// //recorrer arreglo

// let frutas = ["🍎", "🍌", "🍇", "🍐"]

// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Fruta en pisicion ${i} es ${frutas[i]}`)
// }

// //FOR moderno FOR.. OF

// for (const fruta of frutas) {
//     console.log(`Estoy comiendo: ${fruta}`)
// }

// //FOREACH       FUNCION ANONIMA
// frutas.forEach((fruta, indice)=> { 
//     console.log(`Fruta en posicion ${indice} es ${fruta}`)
// })

// //MAP
// lolo = frutas.map((fruta, indice)=> {
//     return `Fruta #${indice}: ${fruta}`
// })

// console.log(lolo)

// let numeros = [1,2,3]

// let multiplo = numeros.map(numero => numero*2)
// console.log(multiplo)
// console.log(numeros)

// let array = ["1", 2, "3", 4, "5", "Hola que hace"]

// //cuando pasa por map se crea un nuevo array de strings
// array.map((e,i)=> {
//     console.log(`${i} - ${e}`)
// })

// //REDUCE
// array.reduce((acumuladora, elemento)=> {
//     return numeroacumulador
// }, valorinicial)

let numeros = [1,2,3, 4]
let suma = numeros.reduce((acumuladora, num)=> {
    return acumuladora + num
}, 0)

//primera iteracion
//acumuladora 0
//num 1
//segunda iteracion
//acumuladora 1
//num 2
//tercera iteracion
//acumuladora 3
//num 3
//cuarta iteracion
//acumuladora 6
//num 4

console.log(suma)