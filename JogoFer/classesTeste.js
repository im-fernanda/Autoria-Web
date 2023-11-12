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
    constructor(door, doorSrc, bgSrc) {
        this.door = door;
        this.spriteDoor = new Image();
        this.spriteDoor.src = doorSrc;
        this.sprite = new Image();
        this.sprite.src = bgSrc;
    }

    draw() { // Desenha o background
        ctx.drawImage(this.sprite, 0, 0, canvas.width, canvas.height)

        if (indiceBG == 0){
            ctx.drawImage(this.spriteDoor, this.door.x, this.door.y, this.door.width, this.door.height)
        }
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
