const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gravidade = 0.5;

RunRight = new Image();
RunRight.src = 'Imgs/Player/Run.png';
StandRight = new Image();
StandRight.src = 'Imgs/Player/Idle.png';
RunLeft = new Image();
RunLeft.src = 'Imgs/Player/RunLeft.png';
StandLeft = new Image();
StandLeft.src = 'Imgs/Player/IdleLeft.png';
imageJUMP = new Image();
imageJUMP.src = 'Imgs/Player/Jump.png';

const player = new Player( {position:{x: 0, y:100}, velocity:{x:0, y:0}, width: 128, height: 130, image: StandRight} );


const bg = [ // Vetor de backgrounds para facilitar a troca de cenário
    new Background({x:472, y:260, width:75, height:87}, 'imgs/door.png', 'imgs/Backgrounds/cenario1.png'),
    new Background({x:100, y:100, width:100, height:100}, 'imgs/door.png','imgs/Backgrounds/cenario2.png'),
    new Background({x:100, y:100, width:100, height:100}, 'imgs/door.png','imgs/Backgrounds/cenario3.png')
]

let indiceBG = 0;

function changeBackground() { // Função para trocar o background
    indiceBG++;
    if (indiceBG >= bg.length) {
        indiceBG = 0; // Volta ao primeiro background
    }

   player = new Player()
}

function updateGameArea() { // Atualiza a tela de jogo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bg[indiceBG].draw();
    player.update();
    player.drawPlayer();
}

function keyDownHandler(e) { // Função ao apertar a tecla
    if (e.key === 'ArrowRight') {
        player.velocity.x = 5;
        player.spritePlayer = RunRight;
    } else if (e.key === 'ArrowLeft') {
        player.velocity.x = -5;
        player.spritePlayer = RunLeft;
    } else if (e.key === 'ArrowUp') {
        player.jump();
    } else if (e.key === 'ArrowDown') {
        changeBackground();
    }
}

function keyUpHandler(e) { // Função ao soltar a tecla
    if (e.key === 'ArrowRight') {
        player.velocity.x = 0;
        player.spritePlayer = StandRight;
    } else if (e.key === 'ArrowLeft') {
        player.velocity.x = 0;
        player.spritePlayer = StandLeft;
    }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function gameLoop() {
    updateGameArea();
    requestAnimationFrame(gameLoop);
}

gameLoop();