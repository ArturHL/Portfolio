//         SLIDER DE MIS DIPLOMAS
const sliderImg = document.querySelector('.slider-display');
const sliderRight = document.querySelector('.slider-right');
const sliderLeft = document.querySelector('.slider-left');
const diplomas = [
    "./Diplomas/diploma-html-css_page-0001.jpg",
    "./Diplomas/diploma-javascript-practico_page-0001.jpg",
    "./Diplomas/diploma-javascript-practico-matematicas_page-0001.jpg",
    "./Diplomas/diploma-git-github_page-0001.jpg",
    "./Diplomas/diploma-python-basico_page-0001.jpg",
    "./Diplomas/diploma-redes_page-0001.jpg",
]

document.querySelector('.slider-img').src = diplomas[0]

sliderRight.addEventListener('click', moverDerecha)
sliderLeft.addEventListener('click', moverIzquierda)

var contador = 0;
var ultimoDiploma = diplomas.length
function moverDerecha(){
    if(contador == ultimoDiploma -1){
        contador = 0;
    }    
    else{
        contador = contador + 1
    }
    document.querySelector('.slider-img').src = diplomas[contador] 
}
function moverIzquierda(){
    if(contador == 0){
        contador = ultimoDiploma - 1
    }
    else{
        contador = contador - 1
    }
    document.querySelector('.slider-img').src = diplomas[contador] 
}



// SLIDER DE MIS TRABAJOS
const sliderWorks = document.querySelector('.works-img');
const portadas = [
    './portadas/VideoJuego.png',
    './portadas/ecommerce.jpg',
    './portadas/Restaurante.jpeg',
];
document.querySelector('.works-img').src = portadas[0]

setInterval(sliderWork, 2000)
var contadorWork = 0;
function sliderWork(){
    contadorWork++;
    if (contadorWork > portadas.length - 1){
        contadorWork = 0
    }
    document.querySelector('.works-img').src = portadas[contadorWork]
}

