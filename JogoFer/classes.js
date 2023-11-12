class Player {
    constructor({position, velocity, width, height, image}) {
        this.position = position;
        this.velocity = velocity;
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
            this.velocity.y = -10;
            this.isJumping = true;
        }
    }

    updatePlayer() {
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

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height >= canvas.height) {
            this.position.y = canvas.height - this.height;
            this.velocity.y = 0;
            this.isJumping = false;
        } else {
            this.velocity.y += gravidade;
        }
    }


}

class Background {
    constructor({bgposition, bgWidth, bgHeight, image}){
        this.bgposition = bgposition;
        this.bgWidth = bgWidth;
        this.bgHeight = bgHeight;

        this.bgImage = image;
}
    drawBG(){
        ctx.drawImage(this.bgImage, 0 + this.bgposition.x + 0 , 0, 
                    this.bgposition.x, this.bgposition.y, //700, 288, 
                    0, 0, 
                    700, 500);
    };

    updateBG() {
        this.drawBG();
        if (this.bgposition.x + Player.width > canvas.width) {
            this.bgposition.x = canvas.width - Player.width;
        }


    //     if (keys.ArrowRight.pressed){
    //         this.bgposition.x += this.velocity.x;
    //     } else if (keys.ArrowLeft.pressed){
    //         this.bgposition.x += this.velocity.x;
    //     } else if (keys.ArrowUp.pressed){
    //         this.bgposition.y += this.velocity.y;
    //     }

        }
}


