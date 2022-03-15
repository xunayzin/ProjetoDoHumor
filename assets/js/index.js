const elementoNome = document.querySelector('#nome');
const elementoSituacao = document.querySelector('#situacao');
const elementoImg = document.querySelector('#imagem');
let elementoBtn = document.querySelector('#alterar');



elementoBtn.addEventListener ('click', () => {
    if (elementoBtn.value == 'primeiro') {
        elementoImg.src = './assets/img/didico.jpg'
        elementoNome.innerText = 'Didico/Imperador'
        elementoSituacao.innerText = 'Na paz'
        elementoBtn.value = 'segundo'
    }
    else if (elementoBtn.value == 'segundo') {
        elementoImg.src = './assets/img/gabi.jpg'
        elementoNome.innerText = 'Gabi/Gabigol/Lil Gabi'
        elementoSituacao.innerText = 'Esculacho'
        elementoBtn.value = 'terceiro'
    }
    else {
        elementoImg.src = './assets/img/bh.jpg'
        elementoNome.innerText = 'BH/Rei dos clássicos'
        elementoSituacao.innerText = 'Full pistola'
        elementoBtn.value = 'primeiro'
    }
})