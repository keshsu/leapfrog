function enemyPlayer(canvas, ctx) {

    // var this =this;
    this.height = 50;
    this.width = 50;
    this.x = canvas.width;
    this.x_velocity = 0;
    this.y = canvas.height - 150;
    this.speed = 0.1;

    
    this.draw =function(){
        ctx.fillStyle = "#aff"; 
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }


    this.update = function() {
        this.x_velocity += this.speed;
        this.x -= this.x_velocity;
        this.x_velocity *= 0.9;

        if (this.x < -64) {

            this.x = -64;

        } else if (this.x > canvas.width) {

            this.x = canvas.width - 42;

        }
        this.draw();

    }
}