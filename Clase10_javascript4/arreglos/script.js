// let frutas = ["🍎", "🍌", "🍇"]

// console.log(frutas)

// let menu = ["🍕 Piza", "🍔 Hamburguesa", "🌭 Pancho", "🥐 Medialuna", "🥟 Empanada"]

// console.log(menu.length -1)

// //remplazo de 🥐 medialuna x 🥪 sandwich
// // menu[3] = "🥪 sandwich"
// // console.log(menu[3])

// // menu[5] = "🍙 sushi"
// // console.log(menu)

// menu.push("🍰 Tarta", "🥗 Ensalada") //mete a lo ultimo
// console.log(menu)

// let ultima = menu.pop() //saca el ultimo
// console.log(menu)
// console.log(ultima)

// menu.unshift("🥞 Panqueques") //mete al principio
// console.log(menu)

// let primero = menu.shift() //saca el primero
// console.log(menu)

// //indexof() ---- Muestra el indice del objeto
// let indice = menu.indexOf("🌭 Pancho")
// console.log(indice)

// let amigos = ["Maxi", "Agus", "Soria", "Fabri", "Muriel"]
// console.log(amigos[0])
// console.log(amigos.indexOf("Agus"))

// //slice-------------------------
// let algunos = amigos.slice()
// algunos.push("Mario")
// console.log(amigos)
// console.log(algunos)

// //splice(indiceDondeEmpieza, cantidad)----------------------
// amigos.splice(2,2)
// console.log(amigos)

// amigos.splice(2,0, "Luna")
// console.log(amigos)

// //JOIN array en string--------------------------------
// let texto = amigos.join(".")
// console.log(texto);

// //SPLIT string a array---------------------
// let animales = "gato-perro-loro-hamster"

// let array = animales.split("-")
// console.log(array);

// console.log("Matias\nSebas")

//filter-----------------
let edades = [15,22,30,17,40]
let mayores = edades.filter(edad => edad > 18) //recorre todo el array y evalua los elementos
console.log(mayores)
