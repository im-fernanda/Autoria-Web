class Player{
    constructor(){
        this.position = {
            x:100,
            y:100,
        }
        
        this.width = 100
        this.height = 100
        this.side = {
            bottom: this.position.y + this.height
        }

        this.velocidade = {
            x:0,
            y:0,
        }
        this.gravidade = 1
    }

    form(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.position.x += this.velocidade.x
        this.position.y += this.velocidade.y
        this.side.bottom = this.position.y + this.height
        if(this.side.bottom + this.velocidade.y < canvas.height){
            this.velocidade.y += this.gravidade
        } else {
            this.velocidade.y = 0
        }
    }
}