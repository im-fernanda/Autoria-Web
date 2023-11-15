class Player {
    constructor( {position, collisionBlocks, speed, width, height, image}) {
        this.position = position;
        this.collisionBlocks = collisionBlocks;
        
        this.speed = speed;
        this.width = width;
        this.height = height;
    
        this.isJumping = false;

        this.spritePlayer = image;

        this.currentFrame = 0;
        this.framesDawn = 0;
        this.maxFrames = 5;

        // this.currentAnimation = this.Door.spriteDoor;

    }
    drawPlayer() {
        ctx.drawImage(this.spritePlayer, this.width * this.currentFrame, 0, 
                    this.width, this.height, 
                    this.position.x, this.position.y, //-60, 
                    this.width-18, this.height-10);
    }

    jump() {
        if (!this.isJumping) { //Ao soltar a tecla up
            this.speed.y = -10;
            this.isJumping = true;
        }
    }

    update() {
        this.drawPlayer();

        this.currentFrame = this.currentFrame % this.maxFrames;

        this.framesDawn++;
        if (this.framesDawn>=6){
            this.currentFrame++;
            this.framesDawn=0;
        } 

        //Testando para mudança de BG
        // if (this.currentAnimation?.onComplete){
        //     if (this.currentAnimation == this.framesDawn - 1 && !this.currentAnimation.isActive){
        //         this.currentAnimation.onComplete();
        //         this.currentAnimation = true;
        //     }
        // }

        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width > canvas.width) {
            this.position.x = canvas.width - this.width;
        }

        this.position.x += this.speed.x;
       // this.position.y += this.speed.y;

        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();
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
            coin1.updateCoin();
            coin2.updateCoin();
            coin3.updateCoin();
       } else if (indexBG==1){
            coin2.updateCoin();
            coin3.updateCoin();
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
        if (this.framesDawn>=70){
            this.currentFrame++;
            this.framesDawn=0;
        } 


    }
}


class Coin {
    constructor(coin, coinSrc){
        this.coin = coin;
        this.spriteCoin = new Image();
        this.spriteCoin.src = coinSrc;

        this.currentFrame = 0;
        this.framesDawn = 0;
        this.maxFrames = 4;
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
        if (this.framesDawn>=4){
            this.currentFrame++;
            this.framesDawn=0;
        } 

    }

}

