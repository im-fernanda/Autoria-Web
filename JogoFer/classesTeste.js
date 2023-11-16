class Player {
    constructor( {position, collisionBlocks, width, height, image, maxFrames, frameBuffer}) {
        this.position = position;
        this.collisionBlocks = collisionBlocks;
        
        this.speed = {x:0, y:0 }
        this.width = width;
        this.height = height;
    
        this.isJumping = false;

        this.spritePlayer = image;

        this.currentFrame = 0;
        this.framesDawn = 0;
        this.frameBuffer = frameBuffer;
        this.maxFrames = maxFrames;

    }
    drawPlayer() {
        ctx.drawImage(this.spritePlayer, this.width * this.currentFrame, 0, 
                    this.width, this.height, 
                    this.position.x, this.position.y, //-60, 
                    this.width-18, this.height-10);
    }
    updatePlayer() {
        this.drawPlayer();
        
        this.framesDawn++;
        if(this.framesDawn % this.frameBuffer == 0){
        
            if (this.currentFrame<this.maxFrames){
                this.currentFrame++
            } else {
                this.currentFrame = 0;
            }
        }

        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width > canvas.width) {
            this.position.x = canvas.width - this.width;
        }
        
        this.position.x += this.speed.x;
        
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();
    }
    
    jump() {
        if (!this.isJumping) { //Ao soltar a tecla up
            this.speed.y = -10;
            this.isJumping = true;
        }
    }
    checkForHorizontalCollisions(){
        if (indexBG==0){
            for (let i=0; i<ArrayCollisionBlocks[0].length; i++){
                const collisionBlock = ArrayCollisionBlocks[0][i];
                // Instrução para se houver colisão
                if(collision(currentPlayer, collisionBlock) ){
                    // console.log("Colidindo no eixo y!!!")

                    //Blocos abaixo
                    if (this.speed.x > 0){
                        this.speed.x = 0;
                        this.position.x = collisionBlock.position.x - this.width - 0.01;
                        break;
                    }
                    //Blocos acima
                    if (this.speed.x < 0){
                        this.speed.x = 0;
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01;
                        break;
                    }
                }
                
                }
        } else if (indexBG==1){
            for (let i=0; i<ArrayCollisionBlocks[1].length; i++){
                const collisionBlock = ArrayCollisionBlocks[1][i];
            
                // Instrução para se houver colisão
                if(collision(currentPlayer, collisionBlock) ){
                    // console.log("Colidindo no eixo y!!!")

                    //Blocos abaixo
                    if (this.speed.x > 0){
                        this.speed.x = 0;
                        this.position.x = collisionBlock.position.x - this.width - 0.01;
                        break;
                    }
                    //Blocos acima
                    if (this.speed.x < 0){
                        this.speed.x = 0;
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01;
                        break;
                    }
                }
                
                }
        } else if (indexBG==2){
            for (let i=0; i<ArrayCollisionBlocks[2].length; i++){
                const collisionBlock = ArrayCollisionBlocks[2][i];
            
                // Instrução para se houver colisão
                if(collision(currentPlayer, collisionBlock) ){
                    // console.log("Colidindo no eixo y!!!")

                    //Blocos abaixo
                    if (this.speed.x > 0){
                        this.speed.x = 0;
                        this.position.x = collisionBlock.position.x - this.width - 0.01;
                        break;
                    }
                    //Blocos acima
                    if (this.speed.x < 0){
                        this.speed.x = 0;
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01;
                        break;
                    }
                }  
                }
        } else if (indexBG==3){
            for (let i=0; i<ArrayCollisionBlocks[3].length; i++){
                const collisionBlock = ArrayCollisionBlocks[3][i];
            
                // Instrução para se houver colisão
                if(collision(currentPlayer, collisionBlock) ){
                    // console.log("Colidindo no eixo y!!!")

                    //Blocos abaixo
                    if (this.speed.x > 0){
                        this.speed.x = 0;
                        this.position.x = collisionBlock.position.x - this.width - 0.01;
                        break;
                    }
                    //Blocos acima
                    if (this.speed.x < 0){
                        this.speed.x = 0;
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01;
                        break;
                    }
                }
                
                }
            }

       
    }

    applyGravity(){
        this.speed.y += gravity;
        this.position.y += this.speed.y;
    }

    checkForVerticalCollisions(){
        if (indexBG==0){ 
            for (let i=0; i<ArrayCollisionBlocks[0].length; i++){
                const collisionBlock = ArrayCollisionBlocks[0][i];   
                // Instrução para se houver colisão
                if(collision(currentPlayer, collisionBlock) ){
                    // console.log("Colidindo no eixo x!!!")

                    //Blocos abaixo do player
                    if (this.speed.y > 0){
                        this.speed.y = 0;
                        this.position.y = collisionBlock.position.y - this.height - 0.01;
                        break;
                    }
                    //Blocos acima do player
                    if (this.speed.y < 0){
                        this.speed.y = 0;
                        this.position.y = collisionBlock.position.y + this.ArrayCollisionBlocks[0].height + 0.01;
                        break;
                        }
                    }
                if(collision(npc, collisionBlock) ){
                        // console.log("Colidindo no eixo x!!!")
    
                        //Blocos abaixo do player
                        if (this.speed.y > 0){
                            this.speed.y = 0;
                            this.position.y = collisionBlock.position.y - this.height - 0.01;
                            break;
                        }
                        //Blocos acima do player
                        if (this.speed.y < 0){
                            this.speed.y = 0;
                            this.position.y = collisionBlock.position.y + this.ArrayCollisionBlocks[0].height + 0.01;
                            break;
                            }
                        }
                }     
            } else if (indexBG==1){ 
                for (let i=0; i<ArrayCollisionBlocks[1].length; i++){
                    const collisionBlock = ArrayCollisionBlocks[1][i];   
                    // Instrução para se houver colisão
                    if(collision(currentPlayer, collisionBlock) ){
                        // console.log("Colidindo no eixo x!!!")
    
                        //Blocos abaixo do player
                        if (this.speed.y > 0){
                            this.speed.y = 0;
                            this.position.y = collisionBlock.position.y - this.height - 0.01;
                            break;
                        }
                        //Blocos acima do player
                        if (this.speed.y < 0){
                            this.speed.y = 0;
                            this.position.y = collisionBlock.position.y + this.ArrayCollisionBlocks[1].height + 0.01;
                            break;
                            }
                        }
                    }     
            } else if (indexBG==2){ 
                for (let i=0; i<ArrayCollisionBlocks[2].length; i++){
                    const collisionBlock = ArrayCollisionBlocks[2][i];   
                    // Instrução para se houver colisão
                    if(collision(currentPlayer, collisionBlock) ){
                        // console.log("Colidindo no eixo x!!!")
    
                        //Blocos abaixo do player
                        if (this.speed.y > 0){
                            this.speed.y = 0;
                            this.position.y = collisionBlock.position.y - this.height - 0.01;
                            break;
                        }
                        //Blocos acima do player
                        if (this.speed.y < 0){
                            this.speed.y = 0;
                            this.position.y = collisionBlock.position.y + this.ArrayCollisionBlocks[2].height + 0.01;
                            break;
                            }
                        }
                    }     
            } else if (indexBG==3){ 
                for (let i=0; i<ArrayCollisionBlocks[3].length; i++){
                    const collisionBlock = ArrayCollisionBlocks[3][i];   
                    // Instrução para se houver colisão
                    if(collision(currentPlayer, collisionBlock) ){
                        // console.log("Colidindo no eixo x!!!")
    
                        //Blocos abaixo do player
                        if (this.speed.y > 0){
                            this.speed.y = 0;
                            this.position.y = collisionBlock.position.y - this.height - 0.01;
                            break;
                        }
                        //Blocos acima do player
                        if (this.speed.y < 0){
                            this.speed.y = 0;
                            this.position.y = collisionBlock.position.y + this.ArrayCollisionBlocks[3].height + 0.01;
                            break;
                            }
                        }
                    }     
            }
        }
}


class Background {
    constructor(bgSrc) {
        this.sprite = new Image();
        this.sprite.src = bgSrc;
    }

    draw() { // Desenha o background
        ctx.drawImage(this.sprite, 0, 0, canvas.width, canvas.height);
        
        if (indexBG==0){
            coins[0].updateCoin();
            coins[1].updateCoin();
            coins[2].updateCoin();
            
        } else if (indexBG==1){
            fruits[0].updateFruit();
            fruits[1].updateFruit();
            fruits[2].updateFruit();
            fruits[3].updateFruit();    

        } else if (indexBG==2){
            fruits[4].updateFruit();    
            fruits[5].updateFruit();
            fruits[6].updateFruit();
            fruits[7].updateFruit();
            fruits[8].updateFruit();
            fruits[9].updateFruit();


            coins[3].updateCoin();
            coins[4].updateCoin();
            coins[5].updateCoin();

        } else if (indexBG==3){
            fireworks.updateFireworks();
            // fogos.
        }

    }

}

class Door{
    constructor(door, doorSrc){
        this.door = door;
        this.spriteDoor = new Image();
        this.spriteDoor.src = doorSrc;

        this.currentFrame = 0;
        this.framesDawn = 0;
        this.maxFrames = 4;
    }
    drawDoor(){
        ctx.drawImage(this.spriteDoor, 0, this.door.height * this.currentFrame,
            this.door.width, this.door.height, 
            this.door.x, this.door.y, 
            this.door.width+8, this.door.height+15);
    }

    updateDoor(){
        this.currentFrame = this.currentFrame % this.maxFrames;

        this.framesDawn++;
        if (this.framesDawn>=100){
            this.currentFrame++;
            this.framesDawn=0;
        }
    }


}


class Coin {
    constructor(coin, coinSrc, maxFrames){
        this.coin = coin;
        this.spriteCoin = new Image();
        this.spriteCoin.src = coinSrc;

        this.currentFrame = 0;
        this.framesDawn = 0;
        this.maxFrames = maxFrames;
    }
    drawCoin() {
        ctx.drawImage(this.spriteCoin, this.coin.width*this.currentFrame, 0, 
                    this.coin.width, this.coin.height, 
                    this.coin.x, this.coin.y, 
                    this.coin.width*1.5, this.coin.height*1.5);
    }
    updateCoin() {
        this.drawCoin();
        this.currentFrame = this.currentFrame % this.maxFrames;

        this.framesDawn++;
        if (this.framesDawn>=6){
            this.currentFrame++;
            this.framesDawn=0;
        } 

    }
}


class Fruit {
    constructor(coin, coinSrc, maxFrames){
        this.coin = coin;
        this.spriteCoin = new Image();
        this.spriteCoin.src = coinSrc;

        this.currentFrame = 0;
        this.framesDawn = 0;
        this.maxFrames = maxFrames;
    }
    drawFruit() {
        ctx.drawImage(this.spriteCoin, this.coin.width*this.currentFrame, 0, 
                    this.coin.width, this.coin.height, 
                    this.coin.x, this.coin.y, 
                    this.coin.width, this.coin.height);
    }
    updateFruit() {
        this.drawFruit();
        this.currentFrame = this.currentFrame % this.maxFrames;

        this.framesDawn++;
        if (this.framesDawn>=3){
            this.currentFrame++;
            this.framesDawn=0;
        } 

    }
}

class Fireworks{
    constructor(fireworks, fireworksSrc, maxFrames){
        this.fireworks = fireworks;
        this.spriteFireworks = new Image();
        this.spriteFireworks.src = fireworksSrc;

        this.currentFrame = 0;
        this.framesDawn = 0;
        this.maxFrames = maxFrames;
    }

    drawFireworks(){
        ctx.drawImage(this.spriteFireworks, this.fireworks.width*this.currentFrame, 0, 
            this.fireworks.width, this.fireworks.height, 
            this.fireworks.x, this.fireworks.y, 
            this.fireworks.width, this.fireworks.height);
    }

    updateFireworks(){
        fireworks.spriteFireworks.onload = function() {
                this.drawFireworks();
        }
        this.currentFrame = this.currentFrame % this.maxFrames;

        this.framesDawn++;
        if (this.framesDawn>=80){
            this.currentFrame++;
            this.framesDawn=0;
        } 
 
    }
}


// class Npc {
//     constructor(npc, npcSrc){
//         this.npc = npc;

//         this.spriteNpc = new Image();
//         this.spriteNpc.src = npcSrc;

//         this.currentFrame = 0;
//         this.framesDawn = 0;
//         this.maxFrames = 4;
//     }
//     drawNPC() {
//         ctx.drawImage(this.spriteNpc, this.npc.width, this.npc.height, 
//                     this.npc.width, this.npc.height, 
//                     this.npc.x, this.npc.y, 
//                     this.npc.width, this.npc.height);
//         }
//     }

//     updateNPC(){
//         this.drawNPC();

//         this.currentFrame = this.currentFrame % this.maxFrames;

//         this.framesDawn++;
//         if (this.framesDawn>=3){
//             this.currentFrame++;
//             this.framesDawn=0;
//         } 
// }





