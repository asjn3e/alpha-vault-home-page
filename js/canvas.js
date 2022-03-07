/** @type {HTMLCanvasElement} */ 


const canvas=document.querySelector("#canvas");

const ctx=canvas.getContext("2d");


canvas.height=document.querySelector(".hero").clientHeight;
canvas.width=document.querySelector(".hero").clientWidth;

let candles=[];

const mouse={
    x:undefined,
    y:undefined
}
class candlesBase{
    constructor(x,width){
        this.x=x;
        this.y=canvas.height;
        this.width=width;
        this.height=Math.random() * -100;
        this.lineHeight=(Math.random() * - 20 * Math.random()) + canvas.height + this.height
        this.color="#5ae2dc";
        this.modificationNumber=undefined;
    }   
    update(newColor){
        // this.height=Math.random() * -200;
        this.color=newColor;
    }
    draw(){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.strokeStyle=this.color
        ctx.lineWidth=1
        ctx.beginPath();
        ctx.moveTo(this.x+this.width / 2,this.y);
        ctx.lineTo(this.x+this.width / 2,this.lineHeight);
        ctx.stroke();
        ctx.closePath()
    }
}

let candlesWidth=canvas.width / 80;
function init(){
    for (let index = 0; index < 80; index++) {
        candles.push(new candlesBase(index * candlesWidth,candlesWidth - candlesWidth / 2.3));
    }
}
init();
let modificationCounter=0;
function updateCandles(){
    candles.forEach((element,index)=>{
        if(element.x < mouse.x && element.x + candlesWidth > mouse.x && index != 0){
            if(element.modificationNumber!=modificationCounter){
                element.height=Math.random() * -100;
                element.lineHeight=(Math.random() * - 50 * Math.random()) + canvas.height + element.height
                
                if(element.height > candles[index -1].height){
                    element.update("#f02d83");
                }
                else{
                    element.update("#5ae2dc");
    
                }
                element.draw();
                modificationCounter++;
                element.modificationNumber=modificationCounter;
            }
        }
        else{
            if(index != 0){
            if(element.height > candles[index -1].height){
                element.update("#f02d83");
            }
            else{
                element.update("#5ae2dc");

            }
            element.draw();
        }else{
            element.draw();
        }
        }
    })
}

document.addEventListener("mousemove",(e)=>{
    mouse.y=e.y;
    mouse.x=e.x - document.querySelector(".navbar").scrollWidth;
    // console.log(mouse)
})



function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    updateCandles();

    requestAnimationFrame(animate);
}
animate()

window.addEventListener("resize",()=>{
    canvas.height=document.querySelector(".hero").clientHeight;
    canvas.width=document.querySelector(".hero").clientWidth;
    candles=[];
    candlesWidth=canvas.width /80;
    ctx.clearRect(0,0,canvas.width,candles.height)
    init();
    animate()
    
})



