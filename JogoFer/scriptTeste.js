const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gravity = 0.5;
let isDoorOpen = false; 

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


let currentPlayer = new Player({position:{x: 0, y:100}, collisionBlocks: ArrayCollisionBlocks[0], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight});

const player = [
    new Player({position:{x: 0, y:0}, collisionBlocks: ArrayCollisionBlocks[0], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight, onComplete: () => {console.log("completedAnimation")}}),
    new Player({position:{x: 0, y:150}, collisionBlocks: ArrayCollisionBlocks[1], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:150}, collisionBlocks: ArrayCollisionBlocks[2], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:150}, collisionBlocks: ArrayCollisionBlocks[3], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight})

];

const bg = [ // Vetor de backgrounds para facilitar a troca de cenário
    new Background('imgs/Backgrounds/Ruinas1.png'),
    new Background('imgs/Backgrounds/Temple1.png'),
    new Background('imgs/Backgrounds/Temple2Complete.png'),
    new Background('imgs/Backgrounds/cenario1.png')
]

const door = new Door( {x:622, y:228, width:95, height:64}, 'imgs/door3.png');

const coin1 = new Coin({x:420, y:320, width:10, height:10}, 'imgs/Coin.png');
const coin2 = new Coin({x:450, y:300, width:10, height:10}, 'imgs/Coin.png');
const coin3 = new Coin({x:480, y:280, width:10, height:10}, 'imgs/Coin.png');


let indexBG = 0;
let indexPlayer = 0;

function changeBackground() { // Função para trocar o background
    if (indexBG < bg.length-1) {
        indexBG++; 
    } 
    // else {
    //     indexBG = 0; //Fazer instruções para fim de jogo
    // }

    currentPlayer = player[indexPlayer];

    if(indexPlayer < bg.length-1){
        indexPlayer++;
    } 

    switch(indexBG) {
        case 0:
            currentPlayer.position.y = 100;
            break;
        case 1:
            currentPlayer.position.y = 300; 
            break;
        case 2:
            currentPlayer.position.y = 200;
            break;
    }

}


function updateGameArea() { // Atualiza a tela de jogo
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    bg[indexBG].draw();
    if(indexBG==0){
        door.drawDoor();
        if (currentPlayer.position.x>150){
            door.updateDoor();
            isDoorOpen = true;
        }
   }

   if (indexBG==0){
       ArrayCollisionBlocks[0].forEach((collisionBlock) => {
           collisionBlock.update();
        })
    } else if (indexBG==1){
        ArrayCollisionBlocks[1].forEach((collisionBlock) => {
            collisionBlock.update();
        })
    } else if (indexBG==2){
        ArrayCollisionBlocks[2].forEach((collisionBlock) => {
            collisionBlock.update();
        })
    } else if (indexBG==3){
        ArrayCollisionBlocks[3].forEach((collisionBlock) => {
            collisionBlock.update();
        })}
        
    // coin1.updateCoin();
    // coin3.updateCoin();
    
    currentPlayer.drawPlayer();
    currentPlayer.update();

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
        currentPlayer.speed.y = -10;
        currentPlayer.jump();
    } else if (e.key === ' ') {
        // if (isDoorOpen){
            changeBackground();
        // }
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