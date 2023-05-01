const lampada = document.getElementById('imagem');
const lampadaLI = document.getElementById('ligar');
const lampadaAPA = document.getElementById('desligar');
const Quebrarlam = document.getElementById('imagem');

lampadaLI.addEventListener('click', ligar);
function ligar(){
    lampada.src = "image/acesa.gif"
}

lampadaAPA.addEventListener('click', desligar);
function desligar(){
    lampada.src = "image/apagada.gif"
}

Quebrarlam.addEventListener('dblclick', quebrar);
function quebrar(){
    lampada.src = "image/quebrada.jpg"
}
