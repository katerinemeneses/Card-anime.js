//SELECIONAR PADRE
const section = document.getElementsByTagName("section")[0]

//CARD-1
const contenedorCard = document.createElement("div")
contenedorCard.className="card"

const cajaImagenes = document.createElement("div")
cajaImagenes.className="img-wrapper"

const imagenPrincipal = document.createElement("img")
imagenPrincipal.className="principal-img"
const selectorImagenprincipal = document.querySelector("[src]") 
imagenPrincipal.src ="assets/fondo1.png" 

const imagenSecundaria = document.createElement("img")
const selectorImagensecundaria = document.querySelector("[src]") 
imagenSecundaria.src ="assets/fondo2.jpg" 

const tituloCard = document.createElement("h2")
let titulo = "Kimetsu No Yaiba"
tituloCard.textContent = [titulo]

const textoCard = document.createElement("p")
let texto = "Demon Slayer es una historia creada por Koyoharu Gotoge, siendo publicada en 2016 y teniendo un estreno en el terreno del anime en abril de este año, logrando sorprender con su primera temporada, la cual acaba de finalizar y que vale la pena destacar porque es tan primordial no perderle la pista."
textoCard.innerHTML = [texto]

const botonCard = document.createElement("button")
let textoButton = "comprar"
botonCard.innerHTML = [textoButton]


section.appendChild(contenedorCard)
contenedorCard.appendChild(cajaImagenes)
cajaImagenes.appendChild(imagenPrincipal)
cajaImagenes.appendChild(imagenSecundaria)
contenedorCard.appendChild(tituloCard)
contenedorCard.appendChild(textoCard)
contenedorCard.appendChild(botonCard)



































