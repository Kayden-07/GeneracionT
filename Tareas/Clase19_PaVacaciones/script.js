colors = [
    "rgb(255, 99, 71)",
    "rgb(60, 179, 113)",
    "rgb(30, 144, 255)",
    "rgb(255, 215, 0)",
    "rgb(138, 43, 226)",
    "rgb(255, 105, 180)"
];

let squares = document.querySelectorAll(".square");

function pickColor() {
    let indiceRandom = Math.floor(Math.random() * colors.length);
    return colors[indiceRandom];
}

let pickedcolor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedcolor;

let message = document.querySelector("#message");
let h1 = document.querySelector("h1");

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedcolor) {
            message.textContent = "¡Correcto!";
            h1.style.backgroundColor = pickedcolor;
            changeColors(pickedcolor);
        } else {
            this.style.backgroundColor = "rgb(196, 218, 250)";
            message.textContent = "Intentalo Nuevamente";
        }
    });
}