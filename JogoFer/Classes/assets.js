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
        if (this.framesDawn>10){
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
        if (this.framesDawn>=3.5){
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
        this.drawFireworks();
        
        this.currentFrame = this.currentFrame % this.maxFrames;
        this.framesDawn++;

        if (this.framesDawn>=3){
            this.currentFrame++;
            this.framesDawn=0;
        } 
 
    }
}

