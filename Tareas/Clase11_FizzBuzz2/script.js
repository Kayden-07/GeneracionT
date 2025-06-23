function FizzBuzz2(palabra1, palabra2, hasta, multiplo1, multiplo2) {
    let array = [];
    for (let i = 1; i <= hasta; i++) {
        if (i % multiplo1 === 0 && i % multiplo2 === 0) {
            array.push(palabra1 + palabra2);
        } else if (i % multiplo1 === 0) {
            array.push(palabra1);
        } else if (i % multiplo2 === 0) {
            array.push(palabra2)
        } else {
            array.push(i)
        }
    }
    return array.join(",");
}

console.log(FizzBuzz2("Cara", "Melo", 15, 3, 5));

console.log(FizzBuzz2("Hola", "Mundo", 70, 7, 10))