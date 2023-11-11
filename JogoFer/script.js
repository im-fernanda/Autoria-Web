const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gravidade = 0.5;

class Player {
    constructor({position, velocity, width, height, bgposition, bgwidth, bgheight}) {
        this.position = position;
        this.velocity = velocity;
        this.width = width;
        this.height = height;

        this.bgposition = bgposition;
        this.bgwidth = bgwidth;
        this.bgheight = bgheight;
    
        this.isJumping = false;

        this.imageRR = new Image();
        this.imageRR.src = 'Imgs/Player/Run.png';
        this.imageSR = new Image();
        this.imageSR.src = 'Imgs/Player/Idle.png';
        this.imageRL = new Image();
        this.imageRL.src = 'Imgs/Player/RunLeft.png';
        this.imageSL = new Image();
        this.imageSL.src = 'Imgs/Player/IdleLeft.png';
        this.imageJUMP = new Image();
        this.imageJUMP.src = 'Imgs/Player/Jump.png';

        this.frames = 0;

        this.background1 = new Image();
        this.background1.src = "Imgs/Backgrounds/environment-preview.png";

        this.spritePlayer = this.imageSR;
        this.background = this.background1;
    }

    drawPlayer() {
        ctx.drawImage(this.spritePlayer, 128 * this.frames, 60, 
                    this.width, this.height, 
                    this.position.x, this.position.y, 
                    this.width, this.height);
    }

    drawBG(){
        ctx.drawImage(this.background, 0 + this.bgposition.x, 0, 
                    this.bgposition.x, this.bgposition.y, //700, 288, 
                    0, 0, 
                    this.bgwidth, this.bgheight);
    }
    
    update() {
        this.drawBG();
        this.drawPlayer();

        this.frames++;
        if(this.frames>5){
            this.frames = 0;
        }
   
        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width > canvas.width) {
            this.position.x = canvas.width - this.width;
        }

  
        if (this.bgposition.x + this.width > canvas.width) {
            this.bgposition.x = canvas.width - this.width;
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


    //     if (keys.ArrowRight.pressed){
    //         this.bgposition.x += this.velocity.x;
    //     } else if (keys.ArrowLeft.pressed){
    //         this.bgposition.x += this.velocity.x;
    //     } else if (keys.ArrowUp.pressed){
    //         this.bgposition.y += this.velocity.y;
    //     }

    }

    jump() {
        if (!this.isJumping) {
            this.velocity.y = -10;
            this.isJumping = true;
        }
    }

}

const player = new Player( {position: {x: 0, y:100}, velocity: {x:0, y:0}, width: 128, height: 130, bgposition: {x: 500,
    y: 288}, bgwidth: 700, bgheight: 500});


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();

}

animate();


const keys = {
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}

addEventListener('keydown', (event) => { //ao apertar a tecla
    console.log(event.key);
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            player.sprite = player.imageRR;
            player.velocity.x = 4;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            player.sprite = player.imageRL;
            player.velocity.x = -4;
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            // player.sprite = player.imageJUMP;
            player.jump();
            break;
    }
})

addEventListener('keyup', (event) => { //ao soltar a tecla
    console.log(event.key);
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            player.sprite = player.imageSR;
            player.velocity.x = 0;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            player.sprite = player.imageSL;
            player.velocity.x = 0;
            break;
    }
})