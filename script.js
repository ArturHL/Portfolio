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
    "./Diplomas/diploma-mobile-first_page-0001.jpg",
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

//More Info Certificates

const xInfo = document.querySelector('.x-info')
const moreInf = document.querySelector('.more-info-certificates')

xInfo.addEventListener('click', moreInfo)

function moreInfo(){
    moreInf.classList.toggle('inactive')
}
function src(index){
    var src = diplomas[index]
    document.querySelector('.info-img').src = src
}