
class Player {
    constructor( {position, speed, width, height, image}) {
        this.position = position;
        this.speed = speed;
        this.width = width;
        this.height = height;
    
        this.isJumping = false;

        this.frames = 0;

        this.spritePlayer = image;

        // this.spritePlayer.onload = () => {
        //     this.width = this.width / this.frames;
        //     this.height = this.height;
        // }
    }

    drawPlayer() {
        ctx.drawImage(this.spritePlayer, 128 * this.frames, 60, 
                    this.width, this.height, 
                    this.position.x, this.position.y, 
                    this.width, this.height);
   
    }

    jump() {
        if (!this.isJumping) {
            this.speed.y = -10;
            this.isJumping = true;
        }
    }

    update() {
        this.drawPlayer();

        this.frames++;
        if (this.frames > 5) {
            this.frames = 0;
        }

        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width > canvas.width) {
            this.position.x = canvas.width - this.width;
        }

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.y + this.height >= canvas.height) {
            this.position.y = canvas.height - this.height;
            this.speed.y = 0;
            this.isJumping = false;
        } else {
            this.speed.y += gravidade;
        }
    }


}

class Background {
    constructor(bgSrc, coin, coinSrc) {
        this.coin = coin;
 
        this.sprite = new Image();
        this.sprite.src = bgSrc;
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

    // drawDoor(){
    //     ctx.drawImage(this.spriteDoor, this.door.width * this.doorFrames, 0,
    //         this.door.width, this.door.height,
    //         this.door.x, this.door.y, 
    //         this.door.width+8, this.door.height+15);
    // }
    
    // updateDoor(){
    //     this.doorFrames++;
    //     if (this.doorFames > 3) {
    //         this.doorFrames = 0;
    //     }
    // }

    
}

class Door{
    constructor(door, doorSrc){
        this.door = door;
        this.spriteDoor = new Image();
        this.spriteDoor.src = doorSrc;

        this.currentFrame = 0;
        this.framesDawn = 0;

    }

    drawDoor(){
        ctx.drawImage(this.spriteDoor, 0, this.door.height * this.currentFrame,
            this.door.width, this.door.height, this.door.x, this.door.y, 
            this.door.width+8, this.door.height+15);
    }

    updateDoor(){
        this.currentFrame = this.currentFrame % 4;

        this.framesDawn++;
        if (this.framesDawn>=70){
            this.currentFrame++;
            this.framesDawn=0;
        } 


        // if (this.doorFrames < 4) {
        //     this.doorFrames++;
        // } else {
        //     this.doorFrames = 0;
        // }

    }
}



// class Coin {
//     constructor(coinPosition, imageSrc){
//         this.coinPosition = coinPosition;

  
//     }

//     drawCoin() {
//         ctx.drawImage(this.image, 0, 0, 
//                     this.coinWidth, this.coinHeight, 
//                     100, 50, 
//                     500, 200);
//     }

//     updateCoin() {
//         this.drawCoin();

//         this.frames++;
//         if (this.frames > 4) {
//             this.frames = 0;
//         }
//     }


// }


// const moeda = new Coin( {position: {x: 100, 50}});
// moeda.drawCoin();
