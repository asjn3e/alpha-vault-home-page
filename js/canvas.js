/** @type {HTMLCanvasElement} */ 


const canvas=document.querySelector("#canvas");

const ctx=canvas.getContext("2d");


canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

class circleBase{
    constructor(){
        this.x=Math.random() * canvas.width;
        this.y=Math.random() * canvas.height;
        this.radius=Math.random() * 3 + 1;
        this.speedX=Math.random() * 5 - 2.5;
        this.speedY=Math.random() * 5 - 2.5;
        this.speedR=Math.random()  / 10;
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
        if(this.radius >= 3){
            this.speedR *= -1;
        }
        if(this.radius <= 0.1){
            this.speedR *= -1
        }
        this.x+=this.speedX;
        this.y+=this.speedY;
        this.radius+=this.speedR;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle="#fff"
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2)
        ctx.fill();
    }
}

let circles=[];

(function init(){
    for(let i=0;i<50;i++){
        circles.push(new circleBase());
    }
    
})();

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