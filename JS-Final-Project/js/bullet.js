function Bullet(x,y){

    console.log("bullet aayo");
    this.x = x;
    this.y = y;
    this.v = 3;
    this.width = 20;
    this.height = 10;
}
Bullet.prototype.draw = function(ctx,bullet){
    // console.log(bullet);
    ctx.beginPath();
    ctx.drawImage(bullet, this.x, this.y, this.width, this.height);
    ctx.fill();
}
Bullet.prototype.update = function(){
    // console.log(this.x);
    this.x +=this.v;
}