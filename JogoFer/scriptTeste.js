const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gravidade = 0.5;
let doorOpen = false; 

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


let currentPlayer = new Player({position:{x: 0, y:0}, collisionBlocks, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight});

const player = [
    new Player({position:{x: 0, y:100}, collisionBlocks, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:150}, collisionBlocks, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:150}, collisionBlocks, speed:{x:0, y:0}, width: 128, height: 130, image: StandRight})
];


const bg = [ // Vetor de backgrounds para facilitar a troca de cenário
    new Background('imgs/Backgrounds/Ruinas1.png', {x:500, y:200, width:50, height:50},'imgs/Money.png'),
    new Background('imgs/Backgrounds/Temple1.png', {x:500, y:200, width:50, height:50}, 'imgs/Coin.png'),
    new Background('imgs/Backgrounds/Florest1.png', {x:500, y:200, width:50, height:50}, 'imgs/Coin.png')
]

const door = new Door( {x:620, y:225, width:95, height:64}, 'imgs/door3.png');
const moeda = new Coin({x:100, y:222, width:40, height:30}, 'imgs/Coin.png');



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
            currentPlayer.position.y = 100; 
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
            doorOpen = true;
        }
   }

   collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
   })

   currentPlayer.drawPlayer();
   currentPlayer.update();
   
   // moeda.drawCoin();
   // moeda.updateCoin();
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
        if (doorOpen){
            changeBackground();
        }
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