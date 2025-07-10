function examinar(nota) {
    switch (true) {
        case nota >= 0 && nota < 2:
            return "Muy mal";
        case nota >= 2 && nota < 5:
            return "Mal";
        case nota >= 5 && nota < 6:
            return "Tan cerca pero tan lejos";
        case nota >= 6 && nota < 8:
            return "¡Bien!";
        case nota >= 8 && nota <= 10:
            return "¡¡Muy bien!!";
        default:
            return "Nota inválida. Por favor, introduce un valor entre 0 y 10.";
    }
}

console.log(examinar(7))

//DOS-----------------

function biggestOne(num1, num2, palabra) {
    if (num1 === num2) {
        const primera = palabra[0];
        const ultima = palabra[palabra.length - 1]
        return primera + ultima;
    } else if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

//Afusbdg
console.log(biggestOne(8    ,3,"jota"))

//TRES--------------------------

let frutasYVerduras = [
    {fruta:"banana"}, {verdura:"apio"}, {fruta:"manzana"}, {fruta:"frutilla"},
    {verdura:"zanahoria"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},
    {verdura:"repollo"},{fruta:"mango"}
]

function filtradoFrutas(frutasYVerduras) {
    let listaFruta = []
    for (const fruta of frutasYVerduras) {
        if (fruta.fruta) {
            listaFruta.push(fruta.fruta)
        }
    }
    return listaFruta;
}

console.log(filtradoFrutas(frutasYVerduras))

//CUATRO----------------

let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

function dispenserGaseosas(gaseosas, unidades) {
    let despensa = {};
    for (let i = 0; i < gaseosas.length; i++) {
        despensa[gaseosas[i]] = unidades[i];
    }
    return despensa;
}

let miStock = dispenserGaseosas(gaseosas, unidades);

console.log("Cantidad de sprite:", miStock["sprite"]);

//CINCO ---------------------

let personas = [
    {nombre: "Juan", edad: 19},
    {nombre: "Mario", edad: 22}
];

function nacimiento(personas) {
    const anioActual = new Date().getFullYear();
    return personas.map(persona => ({
        ...persona, nacimiento: anioActual - persona.edad //...persona hace una copia de todas las propiedades del objeto
    }))
}

console.log(nacimiento(personas))