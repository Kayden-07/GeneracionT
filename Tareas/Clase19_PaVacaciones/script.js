
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
    let ranColor = [];

    for (let i = 0; i < num; i++) {
        let color = randomColor();
        ranColor.push(color);
    }

    return ranColor;
}

function pickColor() {
    let indiceRandom = Math.floor(Math.random() * colors.length);
    return colors[indiceRandom];
}

const dificultadDefault = 6; 
let currentNumColors = dificultadDefault; 

function dificultad(numColors) {
    currentNumColors = numColors; // Actualiza el valor global
    colors = generateRandomColors(numColors);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    message.textContent = "";
    h1.style.backgroundColor = "rgb(0, 81, 135)";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].hidden = false;
        } else {
            squares[i].hidden = true;
        }
    }
}

let squares = document.querySelectorAll(".square");
let colors = generateRandomColors(6);

let pickedcolor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedcolor;

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
    dificultad(currentNumColors); 
    resetButton.textContent = "Nuevos Colores";
    message.textContent = "";
});

let message = document.querySelector("#message");
let h1 = document.querySelector("h1");

let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", function () {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    dificultad(3);
});

hardButton.addEventListener("click", function () {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    dificultad(6);
});

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
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "rgb(196, 218, 250)";
            message.textContent = "Intentalo Nuevamente";
        }
    });
}