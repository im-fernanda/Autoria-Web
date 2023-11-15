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


let currentPlayer = new Player({position:{x: 0, y:100}, collisionBlocks: ArrayCollisionBlocks[0], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight});

imageGUARDA = new Image();
imageGUARDA.src = 'Imgs/Player/Guarda.png';

let player2 = new Player({position:{x: 670, y:205}, collisionBlocks: ArrayCollisionBlocks[0], speed:{x:0, y:0}, width: 128, height: 130, image: imageGUARDA});

const answers = [
    '17',
    '4',
    '2'
];

const questions = [
    '7 + x = 24',
    '2^x = 16',
    '3^x + 2x = 13'
];

const player = [
    new Player({position:{x: 0, y:0}, collisionBlocks: ArrayCollisionBlocks[0], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:150}, collisionBlocks: ArrayCollisionBlocks[1], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:150}, collisionBlocks: ArrayCollisionBlocks[2], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight}),
    new Player({position:{x: 0, y:150}, collisionBlocks: ArrayCollisionBlocks[3], speed:{x:0, y:0}, width: 128, height: 130, image: StandRight})

];

const bg = [ // Vetor de backgrounds para facilitar a troca de cenário
    new Background('imgs/Backgrounds/Ruinas1.png'),
    new Background('imgs/Backgrounds/Temple1Complete.png'),
    new Background('imgs/Backgrounds/Temple2Complete.png'),
    new Background('imgs/Backgrounds/cenario1.png')
]

const door = new Door( {x:622, y:228, width:95, height:64}, 'imgs/Assets/door3.png');

// const guard = new Npc({npc: {x:640, y:228, width:100, height:100}, npcSrc: 'imgs/NPC/guard.png'});

const coin1 = new Coin({x:420, y:280, width:10, height:10}, 'imgs/Assets/Coin.png', 4);
const coin2 = new Coin({x:455, y:260, width:10, height:10}, 'imgs/Assets/Coin.png', 4);
const coin3 = new Coin({x:485, y:240, width:10, height:10}, 'imgs/Assets/Coin.png', 4);

const apple = new Fruit({x:485, y:240, width:32, height:32}, 'imgs/Assets/Apple.png', 16);
const watermelon = new Fruit({x:520, y:240, width:32, height:32}, 'imgs/Assets/Melon.png', 16);
const banana = new Fruit({x:485, y:240, width:32, height:32}, 'imgs/Assets/Bananas.png', 16);


let indexQuestion = 0;
let dialog = false;
let indexBG = 0;
let indexPlayer = 0;
let answer;
let flag = false;
let incorrect = false;

function showPrompt(){
    if(incorrect){
        answer = prompt('Resposta Incorreta! Tente novamente: ');
    } else {
        answer = prompt('Digite sua resposta: ');
        flag = false;
    }
}

function showDialog(msg) {
    const boxWidth = 200;
    const boxHeight = 40;
    const borderWidth = 3; // Largura da borda

    // Desenha a borda preta
    ctx.fillStyle = 'black';
    ctx.fillRect(canvas.width / 2 - boxWidth / 2 - borderWidth, canvas.height / 2 - 200 - boxHeight / 2 - borderWidth, boxWidth + 2 * borderWidth, boxHeight + 2 * borderWidth);

    // Desenha um retângulo branco como fundo da caixa de diálogo
    ctx.fillStyle = 'white';
    ctx.fillRect(canvas.width / 2 - boxWidth / 2, canvas.height / 2 - 200 - boxHeight / 2, boxWidth, boxHeight);

    // Desenha o texto na caixa de diálogo
    ctx.fillStyle = 'black';
    ctx.font = '20px Unical Antiqua';
    ctx.fillText(msg, canvas.width / 2 - ctx.measureText(msg).width / 2, canvas.height / 2 - 200 + 7); // Ajusta verticalmente para o meio da caixa
}

function changeBackground() { // Função para trocar o background
    if (indexBG < bg.length-1) {
        indexBG++; 
        dialog = false;
        indexQuestion++;
    } 
    // else {
    //     indexBG = 0; //Fazer instruções para fim de jogo
    // }

    currentPlayer = player[indexPlayer];

    if(indexPlayer < bg.length-1){
        indexPlayer++;
    } 

}


function updateGameArea() { // Atualiza a tela de jogo
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    bg[indexBG].draw();
    if(indexBG==0){
        door.drawDoor();
        if (currentPlayer.position.x>450){
            door.updateDoor();
            isDoorOpen = true;
        }
   }

   if(currentPlayer.position.x > canvas.width - 210){
        dialog = true;
   }
   if(dialog){
    showDialog(questions[indexQuestion]);
    if(flag){
        do{
            showPrompt();
            if(answer != answers[indexQuestion]){
                incorrect = true;
            }
        } while (answer != answers[indexQuestion]);

        incorrect = false;
        alert('Resposta Correta!');
        changeBackground();

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
        })
    }
        
    // coin1.updateCoin();
    // coin3.updateCoin();
    
    // guard.spriteNpc.onload = function() {
    //     // Agora é seguro desenhar a imagem no canvas
    //     guard.drawNPC();
    // };
    currentPlayer.updatePlayer();

    player2.drawPlayer();
    // player2.update();



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
            changeBackground();
    } else if (e.key === 'Enter'){
        flag = true;
    }
}

function keyUpHandler(e) { // Função ao soltar a tecla
    if (e.key === 'ArrowRight') {
        currentPlayer.speed.x = 0;
        currentPlayer.spritePlayer = StandRight;
    } else if (e.key === 'ArrowLeft') {
        currentPlayer.speed.x = 0;
        currentPlayer.spritePlayer = StandLeft;
    } else if (e.key === 'Enter'){
        flag = false;
    }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function gameLoop() {
    updateGameArea();
    requestAnimationFrame(gameLoop);
}

gameLoop();