const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = 128;
const height = 130;

const gravidade = 0.5;

class Player {
    constructor(width, height) {
        this.position = {
            x: 0,
            y: 100
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = width;
        this.height = height;

        this.isJumping = false;

        this.imageRR = new Image();
        this.imageRR.src = 'Run.png';
        this.imageSR = new Image();
        this.imageSR.src = 'Idle.png';
        this.imageRL = new Image();
        this.imageRL.src = 'RunLeft.png';
        this.imageSL = new Image();
        this.imageSL.src = 'IdleLeft.png';
        this.frames = 0;

        this.background1 = new Image();
        this.background1.src = "environment-preview.png";

        this.sprite = this.imageSR;
        this.background = this.background1;
    }

    draw() {
        ctx.drawImage(this.sprite, 128 * this.frames, 60, 
                    this.width, this.height, 
                    this.position.x, this.position.y, 
                    this.width, this.height);
    }

    drawBG(){
        ctx.drawImage(this.background, 0, 0, 
                    700, 288, 
                    0, 0, 
                    900, 500);

    }

    update() {
        this.drawBG();
        this.draw();

        this.frames++;
        if(this.frames>5){
            this.frames = 0;
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

    jump() {
        if (!this.isJumping) {
            this.velocity.y = -10;
            this.isJumping = true;
        }
    }
}

const player = new Player(width, height);

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
}

animate();

addEventListener('keydown', (event) => { //ao apertar a tecla
    console.log(event.key);
    switch (event.key) {
        case 'ArrowRight':
            player.sprite = player.imageRR;
            player.velocity.x = 4;
            break;
        case 'ArrowLeft':
            player.sprite = player.imageRL;
            player.velocity.x = -4;
            break;
        case 'ArrowUp':
            player.jump();
            break;
    }
})

addEventListener('keyup', (event) => { //ao soltar a tecla
    console.log(event.key);
    switch (event.key) {
        case 'ArrowRight':
            player.sprite = player.imageSR;
            player.velocity.x = 0;
            break;
        case 'ArrowLeft':
            player.sprite = player.imageSL;
            player.velocity.x = 0;
            break;
    }
})