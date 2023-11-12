const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gravidade = 0.5;

imageRR = new Image();
imageRR.src = 'Imgs/Player/Run.png';
imageSR = new Image();
imageSR.src = 'Imgs/Player/Idle.png';
imageRL = new Image();
imageRL.src = 'Imgs/Player/RunLeft.png';
imageSL = new Image();
imageSL.src = 'Imgs/Player/IdleLeft.png';
imageJUMP = new Image();
imageJUMP.src = 'Imgs/Player/Jump.png';

const player = new Player( {position:{x: 0, y:100}, velocity:{x:0, y:0}, width: 128, height: 130, image: imageSR} );

const bg = [
    new Background({ porta: {x:300, y:300, width:100, height:100}}, 'Imgs/Backgrounds/environment-preview.png', 'Imgs/door.png'),
    new Background({ porta: {x:300, y:300, width:100, height:100}}, 'Imgs/Backgrounds/environment-preview.png', 'Imgs/door.png'),
    new Background({ porta: {x:300, y:300, width:100, height:100}}, 'Imgs/Backgrounds/environment-preview.png', 'Imgs/door.png'),
];

let indiceBG;

function trocaBG(){ // troca o background
    indiceBG++;
    if(indiceBG >= bg.length){
        indiceBG = 0;
    }    
    player = new Player( {position:{x: 0, y:100}, velocity:{x:0, y:0}, width: 128, height: 130, image: imageSR} ); // faz o player voltar a posição inicial
}

function updateGame(){

    bg[indiceBG].drawBG();
    player.updatePlayer();
    player.drawPlayer();
}

function animate() {
 
    window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateGame();

}

const keys = {
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    }
}

window.addEventListener('keydown', (event) => { //ao apertar a tecla
    console.log(event.key);
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            player.spritePlayer = imageRR;
            player.velocity.x = 4;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            player.spritePlayer = imageRL;
            player.velocity.x = -4;
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            // player.spritePlayer = imageJUMP;
            player.jump();
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = true;
            trocaBG();
        break;
    }
})

window.addEventListener('keyup', (event) => { //ao soltar a tecla
    console.log(event.key);
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            player.spritePlayer =imageSR;
            player.velocity.x = 0;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            player.spritePlayer = imageSL;
            player.velocity.x = 0;
            break;
    }
})