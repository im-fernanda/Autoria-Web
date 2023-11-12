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

// const player = new Player( {position:{x: 0, y:100}, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight} );

let currentPlayer = new Player({position:{x: 0, y:50}, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight});

const player = [
    new Player({position:{x: 0, y:50}, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:100}, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:150}, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight})
];


const bg = [ // Vetor de backgrounds para facilitar a troca de cenário
    new Background('imgs/Backgrounds/Ruinas1.png', {x:500, y:200, width:50, height:50},'imgs/Money.png'),
    new Background('imgs/Backgrounds/Florest.png', {x:500, y:200, width:50, height:50}, 'imgs/Coin.png'),
    new Background('imgs/Backgrounds/cenario3.png', {x:500, y:200, width:50, height:50}, 'imgs/Coin.png')
]

const door = new Door( {x:546, y:222, width:95, height:64}, 'imgs/door3.png');

let indexBG = 0;
let indexPlayer = 0;

function changeBackground() { // Função para trocar o background
    if (indexBG < bg.length-1) {
        indexBG++; 
    } 
    // else {
    //     indexBG = 0; //Fazer instruções para fim de jogo
    // }

    if(indexPlayer < bg.length-1){
        indexPlayer++;
    } 
    // else {
    //     indexPlayer = 0; //Fazer instruções para fim de jogo
    // }
    
    currentPlayer = player[indexPlayer];

}


function updateGameArea() { // Atualiza a tela de jogo
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    bg[indexBG].draw();
    if(indexBG==0){
        door.drawDoor();
        if (currentPlayer.position.x>150){
             door.updateDoor();
        }
   }
   currentPlayer.update();
   currentPlayer.drawPlayer();
}

function keyDownHandler(e) { // Função ao apertar a tecla
    console.log(e.key);
    if (e.key === 'ArrowRight') {
        currentPlayer.speed.x = 5;
        currentPlayer.spritePlayer = RunRight;
    } else if (e.key === 'ArrowLeft') {
        currentPlayer.speed.x = -5;
        currentPlayer.spritePlayer = RunLeft;
    } else if (e.key === 'ArrowUp') {
        currentPlayer.jump();
    } else if (e.key === ' ') {
        // if(indexBG==0){
        //     door.updateDoor();
        // }
        // door.updateDoor();
        changeBackground();

    }
}

function keyUpHandler(e) { // Função ao soltar a tecla
    if (e.key === 'ArrowRight') {
        currentPlayer.speed.x = 0;
        currentPlayer.spritePlayer = StandRight;
    } else if (e.key === 'ArrowLeft') {
        currentPlayer.speed.x = 0;
        currentPlayer.spritePlayer = StandLeft;
    }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function gameLoop() {
    updateGameArea();
    requestAnimationFrame(gameLoop);
}

gameLoop();
