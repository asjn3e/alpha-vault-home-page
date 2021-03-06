/** @type {HTMLCanvasElement} */ 


const canvas=document.querySelector("#canvas");

const ctx=canvas.getContext("2d");


canvas.height=document.querySelector("body").clientHeight;
canvas.width=document.querySelector("body").clientWidth;

class circleBase{
    constructor(){
        let radiusFactor=4
        if(canvas.width < 540){
            radiusFactor=3
        }
        this.x=Math.random() * canvas.width;
        this.y=Math.random() * canvas.height;
        this.radius=Math.random() * radiusFactor + 0.2;
        this.speedX=Math.random() * 3 - 1.5;
        this.speedY=Math.random() * 3 - 1.5;
        this.speedR=0.05;
        this.colors=["#ff0084","#843ea1","#00e1d9"]
        this.color=this.colors[Math.floor(Math.random()*this.colors.length)];
    }
    update(){


        if(this.y - this.radius  < 0){
            this.speedY *= -1;
        }
        if(this.y + this.radius  > canvas.height){
            this.speedY *= -1;
        }
        if(this.x - this.radius < 0){
            this.speedX *= -1;
        }
        if(this.x + this.radius  > canvas.width){
            this.speedX *= -1;
        }
        
    if(canvas.width > 539){
        if(this.radius >= 4.2){
            this.speedR *= -1;
        }
        if(this.radius <= 0.2){
            this.speedR *= -1
        }
    }
    else{
        if(this.radius >= 3.2){
            this.speedR *= -1;
        }
        if(this.radius <= 0.2){
            this.speedR *= -1
        }
    }
        this.x+=this.speedX;
        this.y+=this.speedY;
        this.radius+=this.speedR;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2)
        ctx.fill();
    }
}

let circles=[];

function init(){
    for(let i=0;i<50;i++){
        circles.push(new circleBase());
    }
    
};
init();

function handleCircles(){
    for (element of circles){
        element.update();
        element.draw();
    }
}
// handleCircles();


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    handleCircles();
    requestAnimationFrame(animate)
}
animate();

window.addEventListener("resize",()=>{
    canvas.height=document.querySelector("body").clientHeight;
    canvas.width=document.querySelector("body").clientWidth;
    circles=[];
    ctx.clearRect(0,0,canvas.width,canvas.height)
    init();
    // animate()
    
})


