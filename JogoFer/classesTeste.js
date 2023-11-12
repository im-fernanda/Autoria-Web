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
    constructor(porta, caminhoPorta, caminho) {
        this.porta = porta;
        this.spritePorta = new Image();
        this.spritePorta.src = caminhoPorta;
        this.sprite = new Image();
        this.sprite.src = caminho;
    }

    draw() { // Desenha o background
        ctx.drawImage(this.sprite, 0, 0, canvas.width, canvas.height)
        ctx.drawImage(this.spritePorta, this.porta.x, this.porta.y, this.porta.width, this.porta.height)
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
