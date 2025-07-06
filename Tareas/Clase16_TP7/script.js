const body = document.body
const raton = document.querySelector(".raton")

let mousePulsado = false

body.addEventListener("mousedown", () => {
    mousePulsado = true
})

body.addEventListener("mouseup", (e) => {
    mousePulsado = false
})

body.addEventListener("mousemove", (evento) => {
    if (mousePulsado) {
        raton.style.top = evento.clientY + "px";
        raton.style.left = evento.clientX + "px";
    }
})