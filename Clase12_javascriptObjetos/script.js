//Objetos
//CLAVE: EL NOMBRE DE UNA PROPIEDAD
//VALOR: CONTENIDO ASOCIADO A LA CLAVE
let persona = {
    nombre: "Agus",
    edad: 31,
    personaje: "Power ranger rosa",
    saludar: function () {
        console.log("Hola soy ", this.nombre)
    }
}

persona.saludar()