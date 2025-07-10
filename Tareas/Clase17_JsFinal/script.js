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


let palabraAleatoria = randomWords()
let time = 10
let score = 0

addToDOM()

const text = document.querySelector("#text")
text.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const palabraIngresada = text.value;
        if (palabraIngresada === palabraAleatoria) {
            time += 3
            console.log(text.value)
            text.value = ""
            palabraAleatoria = randomWords()
            addToDOM()
        } else {
            text.value = ""
        }
        console.log(time)
    }
})