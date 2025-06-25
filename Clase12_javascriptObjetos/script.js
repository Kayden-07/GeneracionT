// //Objetos
// //CLAVE: EL NOMBRE DE UNA PROPIEDAD
// //VALOR: CONTENIDO ASOCIADO A LA CLAVE
// let persona = {
//     nombre: "Agus",
//     edad: 31,
//     personaje: "Power ranger rosa",
//     saludar: function () {
//         console.log("Hola soy ", this.nombre)
//     }
// }

// persona.saludar()

// let personas = [
//     {nombre: "ana", edad: 30},
//     {nombre: "felipe", edad: 20}
// ];

// let joven = personas.find(p => p.edad < 25);
// console.log(joven.nombre)

//EJERCICIO AÑO DE NACIMIENTO------------

// let personas = [
//     {nombre: "Juan", edad: 19},
//     {nombre: "Mario", edad: 22}
// ];

personas = personas.map(persona => ({
    ...p,
    habilidades: ["json", "htrml"]
}))

// function nacimiento(personas) {
//     const anioActual = new Date().getFullYear();
//     return personas.map(persona => ({
//         ...persona, nacimiento: anioActual - persona.edad //...persona hace una copia de todas las propiedades del objeto
//     }))
// }

// console.log(nacimiento(personas))

let persona = {
    nombre: "Mario",
    edad: 33
}

persona.edad = 31
persona.habilidades = ["HTML", "CSS"]

console.log(persona)

let personaVacia = {}

personaVacia.nombre = prompt("INgresa tu nombrew")