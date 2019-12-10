function Player(canvas, ctx) {

    // var that = this;
    this.height= 50;
    this.jumping= true;
    this.width= 50;
    this.x= 10;
    this.x_velocity= 0;
    this.y= canvas.height - 150;
    this.y_velocity= 0;

    this.draw = function(){
        
        ctx.fillStyle = "#ff0000";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
   

    this.update = function(left,right,up) {
        // console.log(left, right, up);
        if (left) {
            console.log('left');
            this.x_velocity -= 0.5;

        }

        if (up && this.jumping == false) {
            console.log('up');

            this.y_velocity -= 35;
            this.jumping = true;

        }

        if (right) {
            console.log('right');

            this.x_velocity += 0.5;

        }

        this.y_velocity += 1.5;
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.x_velocity *= 0.9;
        this.y_velocity *= 0.9;

        if (this.y > canvas.height - 150) {

            this.jumping = false;
            this.y = canvas.height - 150;
            this.y_velocity = 0;

        }

        if (this.x < 10) {

            this.x = 10;

        } else if (this.x > canvas.width - 62) { 
            this.x = canvas.width - 62;
        }
        
        
        this.draw();
    }
}