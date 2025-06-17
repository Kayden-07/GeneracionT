let genero = prompt("Cual es el genero de la persona? (hombre/mujer)").toLocaleLowerCase()
let edad = prompt("La edad de la persona?").toLocaleLowerCase()

switch (genero.trim()) {
    case "mujer":
        if (edad >= 60) {
            console.log("Puede jubilarse")
        } else {
            console.log("No puede jubilarse")
        }
        break;

    case "hombre":
        if (edad >= 65) {
            console.log("Puede jubilarse")
        } else {
            console.log("No puede jubilarse")
        }
        break;

    default:
        console.log("No aceptamos otro genero")
        break;
}