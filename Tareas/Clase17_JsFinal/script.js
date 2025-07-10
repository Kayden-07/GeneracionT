const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

const randomWords = () => {
    const indice = Math.floor(Math.random() * words.length)
    return words[indice]
}

const addToDOM = () => {
    const randomWord = document.querySelector("#randomWord")
    randomWord.textContent = `${palabraAleatoria}`
}

const actualizarTiempo = () =>{
    timereal = setInterval(() => {
        time--;
        timeSpan.innerText = time + "s"
        if (time === 0) {
            clearInterval(timereal)
            gameOver()
        }
    }, 1000)
}

const updateScore = () => {
    score++
    scoreHtml.innerText = score
}

const gameOver = () => {
    let h1 = document.createElement("h2")
    h1.textContent = "GAME OVER"
    end_game_container.appendChild(h1)
    let parrafo = document.createElement("p")
    parrafo.textContent = `Score final: ${score}`
    end_game_container.appendChild(parrafo)
    let boton = document.createElement("button")
    boton.textContent = "Volver a empezar"
    boton.onclick = () => {
        location.reload()
    }
    end_game_container.appendChild(boton)
    main.remove()
}

let palabraAleatoria = randomWords()
let time = 10
let score = 0

const main = document.querySelector(".main")
const scoreHtml = document.querySelector("#score")
const timeSpan = document.querySelector("#timeSpan")
const end_game_container = document.querySelector("#end-game-container")

addToDOM()

const text = document.querySelector("#text")
text.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const palabraIngresada = text.value;
        if (palabraIngresada === palabraAleatoria) {
            time += 3
            text.value = ""
            palabraAleatoria = randomWords()
            addToDOM()
            updateScore()
        } else {
            text.value = ""
        }
    }
})

actualizarTiempo()
