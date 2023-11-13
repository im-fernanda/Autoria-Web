class CollisionBlock {
    constructor(position) {
        this.position = position;
        this.width = 62;
        this.height = 34;
    }

    draw() { 
        ctx.fillStyle = 'rgba(255,0,0)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.draw();
    }
}