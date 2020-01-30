function EnemyCar(mainC){
    this.width = 60;
    this.height= 130;
    this.enemyElement = null;

    this.trackSpace = (mainC.offsetWidth/3 - this.width)/2;
    this.x = 0 + this.trackSpace;
    this.y = -30;
    this.mainC=mainC;
    this.multicars =["url(images/car.png)", "url(images/green.png)", "url(images/yellow.png)", "url(images/blue.png)"];
    var enemycar = document.createElement('div');

    this.draw= function(){
        
        enemycar.style.height = this.height+'px';
        enemycar.style.width = this.width +'px';
        enemycar.style.position="absolute";
        
        enemycar.style.background = this.multicars[Math.floor(Math.random()*5)];
        enemycar.style.backgroundSize = "cover";
        enemycar.style.zIndex="2";
        enemycar.style.transform="rotate(180deg)";

       // enemycar.classList.add('enemycar');
        this.mainC.appendChild(enemycar);        

        this.enemyElement = enemycar;
        this.enemyElement.style.left = this.x+'px';
        this.enemyElement.style.top = this.y+'px';
    }
    
    this.update= function(x,y){
      //  console.log(x,y);
        this.x = x;
        this.y += y;

       // this.drawCar();
    }
}