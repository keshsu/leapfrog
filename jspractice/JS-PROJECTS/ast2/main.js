var index=1;

var time = 2000;

var mainCarousalcontainer= document.querySelector('.main-carousal-container');
var slider_content = document.getElementById('image-slider-wrapper');


var images= document.getElementsByTagName('img');
var img_width = images[index].width;     
var len = images.length;
var total_wid = len * img_width;


var left = 0;
var currentPos = 0;

// document.body.onload= addElement;


// images.style.float = "left";

function mainCarousal(){
    this.imageCount = function(){
        this.totalimages = slider_content.getElementsByTagName('img').length;
        console.log("totalimages is:",this.totalimages);
        
        return this.totalimages;
    }

    this.mainCarousalS= function(){ 
        mainCarousalcontainer.style.position = "relative";
        mainCarousalcontainer.style.overflow = "auto";
        slider_content.style.position = "absolute";
        slider_content.style.fontSize = "0";
        slider_content.style.width = total_wid+"px";
    }
    // this.

    this.getLeftButton= function(){
            this.element= document.createElement("button");
            this.element.setAttribute("onclick","changeImage(-1)");
            this.element.setAttribute("class","prevBtn");
            mainCarousalcontainer.appendChild(this.element);
            this.element.style.position="absolute";
            this.element.style.top="40%";
            this.element.style.background="red";
            this.element.style.height="30px";
            this.element.style.width="30px";
            this.element.style.border="none";
            this.element.style.cursor="pointer";    
    
    }
    this.getRightButton= function(){
        this.element= document.createElement("button");
        this.element.setAttribute("onclick","changeImage(1)");
        this.element.setAttribute("class","nextBtn");
        mainCarousalcontainer.appendChild(this.element);
        this.element.style.position="absolute";
        this.element.style.top="40%";
        this.element.style.right="0%";
        this.element.style.background="red";
        this.element.style.height="30px";
        this.element.style.width="30px";
        this.element.style.border="none";
        this.element.style.cursor="pointer";    

}

    this.draw = function(){
        this.dots= [];

        this.element = document.createElement("div");
        this.element.setAttribute("id","dots-container");
        mainCarousalcontainer.appendChild(this.element);

        // this.dotscontainer = document.querySelector('.dots-container');

        // console.log("dots contianer initialized", dotscontainer);

        // for(var i=0; i<len;i++){
        //     var dot = document.createElement("span");
        //     dot.classList.add("dots");
        //     dotscontainer.append(dot);
        //     dots.push(dot);
        // }

        // dots[index].classList.add("active");

        // nextImage(index,len,dots,images);
    }
}

function changeImage(direction){

        this.adder=0;
        slider_content.style.left = " 2.5s ease-in-out";
        
        
        this.currentPos = this.currentPos + direction * img_width;
        
        
        if(this.currentPos<0){
            this.currentPos= total_wid - img_width;
            this.adder =this.currentPos;

            console.log("current position starts:",currentPos);
        }
        else if(this.currentPos >= total_wid){
            this.currentPos= 0;
        }
        
        slider_content.style.left = -this.currentPos + 'px';
        
        // console.log("currentposition is:",currentPos);
        console.log("current pos is", this.currentPos);
}


function autoslideimage(){

}
var mainCar= new mainCarousal();
mainCar.mainCarousalS();
mainCar.imageCount();
mainCar.getRightButton();
mainCar.getLeftButton();
mainCar.draw();