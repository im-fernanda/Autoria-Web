const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

const canvas_width = canvas.width = 778;
const canvas_height = canvas.height = 625;

const largura = 128;
const altura = 128;

const background1 = document.getElementById('backImg');
const personagem = document.querySelector("#personagem");

let estado = 1;
// let walkx = 150;
// let walky = 0;

personagem.onload = function() {
    ctx.drawImage(personagem, 0, 0);
}

function animate(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    // ctx.drawImage(personagem, 0, 0, 128, 128, );
    ctx.drawImage(personagem, 0, 0, largura, altura, (canvas_width/2)-largura, (canvas_height/2)-altura, altura, largura);

    requestAnimationFrame(animate);
}

animate();



// function draw() {
//     ctx.clearRect(0, 0, 300, 300);
//     ctx.drawImage(imagem, 0, 0
//     );
// }

let rungame = setInterval(draw, 100);