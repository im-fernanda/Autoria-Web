const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gravity = 0.5;
let isDoorOpen = false; 
let indexFruits = 0;
let indexQuestion = 0;
let dialog = false;
let indexBG = 0;
let indexPlayer = 0;
let answer;
let flag = false;
let incorrect = false;
let dead = false;
let scoreboard = document.getElementById('points');
let points = 0;
let stringPoints;

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
imageDead = new Image();
imageDead.src = 'imgs/PLayer/Dead.png';
imageGUARD = new Image();
imageGUARD.src = 'Imgs/Player/GUARD.png';


let currentPlayer = new Player({position:{x: 0, y:100}, collisionBlocks: ArrayCollisionBlocks[0], width: 128, height: 130, image: StandRight, maxFrames:5, frameBuffer: 6});
const npc = new Player({position:{x: 670, y:205}, collisionBlocks: ArrayCollisionBlocks[0], width: 128, height: 130, image: imageGUARD, maxFrames:4, frameBuffer: 10});
const door = new Door( {x:622, y:228, width:95, height:64}, 'imgs/Assets/door3.png');
const fireworks = new Fireworks({x:200, y:300, width:66, height:84}, 'imgs/Assets/Explosion', 80);

const player = [ // Vetor dde players para facilitar a troca de colisões
    new Player({position:{x: 0, y:0}, collisionBlocks: ArrayCollisionBlocks[0], width: 128, height: 130, image: StandRight, maxFrames:6}),
    new Player({position:{x: 0, y:0}, collisionBlocks: ArrayCollisionBlocks[1], width: 128, height: 130, image: StandRight, maxFrames:6}),
    new Player({position:{x: 0, y:150}, collisionBlocks: ArrayCollisionBlocks[2], width: 128, height: 130, image: StandRight, maxFrames:6}),
    new Player({position:{x: 0, y:150}, collisionBlocks: ArrayCollisionBlocks[3], width: 128, height: 130, image: StandRight, maxFrames:6})
];

const bg = [ // Vetor de backgrounds para facilitar a troca de cenário
    new Background('imgs/Backgrounds/Ruinas1.png'),
    new Background('imgs/Backgrounds/Temple1Complete.png'),
    new Background('imgs/Backgrounds/Temple2Complete.png'),
    new Background('imgs/Backgrounds/cenario1.png')
]

const questions = [
    '2^x = 16?',
    'Δ = x^2 + (6*6)x?',
    'Cos(π)?'
];

const answers = [
    '4',
    '36',
    '-1'
];

let coins = [
    new Coin({x:420, y:280, width:10, height:10}, 'imgs/Assets/Coin.png', 4),
    new Coin({x:450, y:260, width:10, height:10}, 'imgs/Assets/Coin.png', 4),
    new Coin({x:485, y:240, width:10, height:10}, 'imgs/Assets/Coin.png', 4),
    new Coin({x:600, y:300, width:10, height:10}, 'imgs/Assets/Coin.png', 4),
    new Coin({x:600, y:200, width:10, height:10}, 'imgs/Assets/Coin.png', 4),
    new Coin({x:600, y:100, width:10, height:10}, 'imgs/Assets/Coin.png', 4),

];

let fruits = [
    new Fruit({x:400, y:250, width:32, height:32}, 'imgs/Assets/Bananas.png', 16),
    new Fruit({x:180, y:350, width:32, height:32}, 'imgs/Assets/Bananas.png', 16),
    new Fruit({x:360, y:250, width:32, height:32}, 'imgs/Assets/Apple.png', 16),
    new Fruit({x:320, y:270, width:32, height:32}, 'imgs/Assets/Melon.png', 16),
    new Fruit({x:450, y:132, width:32, height:32}, 'imgs/Assets/Bananas.png', 16),
    new Fruit({x:540, y:200, width:32, height:32}, 'imgs/Assets/Melon.png', 16),
    new Fruit({x:188, y:132, width:32, height:32}, 'imgs/Assets/Apple.png', 16),
    new Fruit({x:208, y:132, width:32, height:32}, 'imgs/Assets/Apple.png', 16),
    new Fruit({x:228, y:132, width:32, height:32}, 'imgs/Assets/Apple.png', 16),
    new Fruit({x:500, y:170, width:32, height:32}, 'imgs/Assets/Apple.png', 16),

]

function placar(){
    
}

function showPrompt(){
    if(incorrect){
        answer = prompt('Resposta Incorreta! Tente novamente: ');
    } else {
        answer = prompt('Digite sua resposta: ');
        flag = false;
    }
}

function showDialog(msg) {
    const boxWidth = 180;
    const boxHeight = 50;
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

   if(indexBG == 2){
        if(currentPlayer.position.x > 458 && currentPlayer.position.y > 349){
            currentPlayer.spritePlayer = imageDead;
            dead = true;
        }
        if(dead){
            currentPlayer.position.x = 0;
            currentPlayer.position.y = 150;
            dialog = false;
            dead = false;
            currentPlayer.spritePlayer = StandRight;
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
           
    // guard.spriteNpc.onload = function() {
    //     // Agora é seguro desenhar a imagem no canvas
    //     guard.drawNPC();
    // };
    currentPlayer.updatePlayer();
    if(indexBG==0){
        npc.updatePlayer();
    }
}


function gameLoop() {
    updateGameArea();
    requestAnimationFrame(gameLoop);
}

gameLoop();