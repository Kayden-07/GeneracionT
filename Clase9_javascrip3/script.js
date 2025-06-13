function saludar(name, apellido) {
    //nombre y apellido --> parametros (DECLARACION)
    console.log("Hola " + name + " " + apellido)
}

//LLAMADA
saludar("Agus", "Ramos")
// "Agus", "Ramos" --> ARGUMENTOS (LLAMADA)


function Sumar(a, b) {
    return a + b
}

let resul = Sumar(2, 6)
console.log(resul)

function saludarTodos(...nombres) {
    for (const nombre of nombres) {
        console.log("Hola " + nombre)
    }
}

saludarTodos("Gino", "Lucho")

//FUNCIONES ANONIMAS no tienen Nombre
const saludar = function (parametros) {

}