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

background1 = new Image();
background1.src = "Imgs/Backgrounds/environment-preview.png";

// spriteCoin = new Image();
// spriteCoin.src = 'Imgs/coin.png';

const bg1 = new Background( {bgposition:{x: 500, y:288}, bgWidth: 700, bgHeight: 500, image: background1} );
const player = new Player( {position:{x: 0, y:100}, velocity:{x:0, y:0}, width: 128, height: 130, image: imageSR} );

// const coin1 = new Coin ( {position:{x: 100, y: 100}, imageSrc: spriteCoin.src} );

function update() {
    bg1.updateBG();
    player.updatePlayer();

}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();

}

animate();

const keys = {
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowUp: {
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

// let rungame = setInterval(animate, 100);

// setTimeout(() => {
//     clearInterval(rungame);
//     console.log("Jogo parado após 3 segundos");
// }, 3000);