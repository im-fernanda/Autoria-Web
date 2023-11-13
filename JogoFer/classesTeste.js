class Player {
    constructor( {position, collisionBlocks, speed, width, height, image}) {
        this.position = position;
        this.collisionBlocks = collisionBlocks;
        
        this.speed = speed;
        this.width = width;
        this.height = height;
    
        this.isJumping = false;

        // this.frames = 0;
        this.spritePlayer = image;

        
        this.currentFrame = 0;
        this.framesDawn = 0;
        this.maxFrames = 5;

    }
    drawPlayer() {
        ctx.drawImage(this.spritePlayer, this.width * this.currentFrame, 0, 
                    this.width, this.height, 
                    this.position.x, this.position.y, //-60, 
                    this.width, this.height);
    }

    jump() {
        if (!this.isJumping) { //Ao soltar a tecla up
            this.speed.y = -10;
            this.isJumping = true;
        }
    }

    update() {
        this.drawPlayer();

        // this.frames++;
        // if (this.frames > 5) {
        //     this.frames = 0;
        // }

        this.currentFrame = this.currentFrame % this.maxFrames;

        this.framesDawn++;
        if (this.framesDawn>=6){
            this.currentFrame++;
            this.framesDawn=0;
        } 

        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width > canvas.width) {
            this.position.x = canvas.width - this.width;
        }

        this.position.x += this.speed.x;

        this.applyGravity();
      //  this.checkForVerticalCollisions();
    }

    applyGravity(){
        this.position.y += this.speed.y;

        if (this.position.y + this.height >= canvas.height) {
            this.position.y = canvas.height - this.height;
            this.speed.y = 0;
            this.isJumping = false;
        } else {
            this.speed.y += gravidade;
        }
    }

    checkForVerticalCollisions(){
        for (let i=0; i<collisionBlocks.length; i++){
            const collisionBlock = collisionBlocks[i];
            const positionY = collisionBlock.position.y;
            console.log(positionY);
            
            // Instrução para se colidir
            if(collision(currentPlayer, collisionBlock) ){
                console.log("Colidindo!!!")
            }
            
            }
       
    }
}


class Background {
    constructor(bgSrc, coin, coinSrc) {
        this.sprite = new Image();
        this.sprite.src = bgSrc;

        this.coin = coin;
        this.spriteCoin = new Image();
        this.spriteCoin.src = coinSrc;

    }

    draw() { // Desenha o background
        ctx.drawImage(this.sprite, 0, 0, canvas.width, canvas.height)


        // ctx.drawImage(this.spriteCoin, 0, 0, 
        //                         this.coin.width, this.coin.height, 
        //                         this.coin.x, this.coin.x, 
        //                         50, 50);
                            
        // if (player.position.x == 100){
        //     this.updateDoor();
        // }
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



