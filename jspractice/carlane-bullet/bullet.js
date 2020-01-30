function Bullet(mainC,x,y){
    this.width = 8.5;
    this.height= 15.7;
    this.BulletElement = null;
    this.mainC=mainC;
    // this.incX=10;
    this.x = x;
    this.y = y;
    this.v = 3;
    
    var bullet = document.createElement('div');
    
    this.draw = function(x, y){
        console.log(this.x, this.y)
        bullet.style.height = this.height+'px';
        bullet.style.width = this.width +'px';
        bullet.style.position="absolute";
        bullet.style.background = "url(images/bullet.png) center";
        bullet.style.backgroundSize = "cover";
        bullet.style.zIndex = "1";

        this.mainC.appendChild(bullet);        

        this.BulletElement = bullet;
        this.BulletElement.setAttribute("id", "bullet");

        this.BulletElement.style.left = this.x+'px';
        this.BulletElement.style.top = this.y+'px';
    }
    
    this.update = function(){
        this.y -= this.v;
    }
}
