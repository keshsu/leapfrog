var index=1;

var time = 4000;

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
    //drawing main container

    this.mainCarousalS= function(){ 
        mainCarousalcontainer.style.position = "relative";
        mainCarousalcontainer.style.overflow = "hidden";
        slider_content.style.position = "absolute";
        slider_content.style.fontSize = "0";
        slider_content.style.width = total_wid+"px";
    }
    // drawing the buttons

    this.getLeftButton= function(){
        this.element= document.createElement("button");
        this.element.setAttribute("onclick","mainCar.changeImage(-1)");
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
        this.element.setAttribute("onclick","mainCar.changeImage(1)");
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
    //drawing the dots

    this.draw = function(){

        this.dots= [];
        this.dot;
        this.element = document.createElement("div");
        this.element.setAttribute("id","dots-container");
        mainCarousalcontainer.appendChild(this.element);

        dotscontainer = document.querySelector('#dots-container');
        dotscontainer.style.textAlign= "center";
        dotscontainer.style.width= "100%";
        dotscontainer.style.height= "20px";
        dotscontainer.style.position="absolute";
        dotscontainer.style.bottom="10px";
        
        console.log("dots contianer initialized", dotscontainer);

        for(var i=0; i<len;i++){
            this.dot = document.createElement("span");
            this.dot.classList.add("dots");
            this.dot.style.background="lightgray";
            this.dot.style.display="inline-block";
            // this.dot.style.float = "left";
            this.dot.style.width="20px";
            this.dot.style.height="20px";   
            this.dot.style.borderRadius="50%";
            this.dot.style.margin="5px";
            this.dot.style.cursor="pointer";
            dotscontainer.append(this.dot);
            this.dots.push(this.dot);
        }

        this.dots[index-1].classList.add("active");
    }

    this.changeImage = function(direction){
var currentPos = 0;

        this.currentPos = this.currentPos + direction * img_width;
        
        
        if(this.currentPos<0){
            this.currentPos= total_wid - img_width;

            console.log("current position starts:",currentPos);
        }
        else if(this.currentPos >= total_wid){
            this.currentPos= 0;
        }
    
        this.stylefor ="ease-in-out";
        slider_content.style.transition = 'left ' + time / 1000 + 's ' + this.stylefor;
        slider_content.style.left = -this.currentPos + 'px';
        
        // console.log("currentposition is:",currentPos);
        console.log("current pos is starting", this.currentPos);

        // dots.setAttribute()
        
        // slider_content.setAttribute("class",'isAnimating');
        // setTimeout(function () {
        //     slider_content.style.transition = '';
        //     slider_content.removeAttribute("class",'isAnimating');
        // },time);
    }
}

function timeout(){
    slider_content.setAttribute("class",'isAnimating');
    setTimeout(function () {
        slider_content.style.transition = '';
        slider_content.removeAttribute("class",'isAnimating');
    },time);


    this.cleari = setInterval(function(clicked) {
        this.clicked = clicked;
    // if(this.clicked == false){
        autoslideimage(index, left);   
    // }
}, time);
}

function autoslideimage(index, left){
    this.index = index;
    this.left=left;
    this.stylefor ="ease-in-out";
    
    
    
    console.log("index",this.index);
    
    this.currentPos = this.left + this.index * img_width;

    clearInterval(cleari);
    timeout();

    
    console.log("imge width:",img_width);
    console.log("total width:",total_wid);
    
    
    if(this.currentPos >=total_wid-img_width){
        this.index= -1;
    }
    
    slider_content.style.left = -this.currentPos + 'px';
    
    console.log("current pos is", this.currentPos);
    
    
    
    slider_content.style.transition = 'left ' + time / 1000 + 's ' + this.stylefor;
    this.index++;
}
// autoslideimage();
var direction;
var mainCar= new mainCarousal();
mainCar.mainCarousalS();
mainCar.imageCount();
mainCar.getRightButton();
mainCar.getLeftButton();
mainCar.draw();
mainCar.changeImage(direction);