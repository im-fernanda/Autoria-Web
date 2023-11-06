const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

const canvas_width = canvas.width = 778;
const canvas_height = canvas.height = 625;

const largura = 128;
const altura = 130;

const background1 = document.getElementById('backImg');
const personagem = document.querySelector("#personagem");
personagem.onload = function() {
    ctx.drawImage(personagem, 0, 0);
}

let estado = 0;
let walkx = 100;
let walky = 0;

requestAnimationFrame(animate);

function animate(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);

    ctx.drawImage(personagem, estado*largura, altura, 
                                largura, altura, 
                                (canvas_width/2)-(largura/2), (canvas_height/2)-(altura/2), 
                                128, 128);

    requestAnimationFrame(animate);
    estado++;
    if (estado == 3) {
        estado = 0;
    }
}

animate();

let rungame = setInterval(draw, 100);