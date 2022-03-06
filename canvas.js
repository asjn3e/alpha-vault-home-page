/** @type {HTMLCanvasElement} */ 


const canvas=document.querySelector("#canvas");

const ctx=canvas.getContext("2d");


canvas.height=window.innerHeight;
canvas.width=document.querySelector(".hero").scrollWidth;



// let waves=[]


// const mouse={
//     x:undefined,
//     y:undefined
// }

// class WavesBase{
//     constructor(){
//         this.x=mouse.x;
//         this.y=mouse.y;
//         this.radius=30;
//     }
//     update(){

//     }
//     draw(){
//         ctx.beginPath();
//         ctx.fillStyle="green"
//         ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
//         ctx.fill();
//         ctx.closePath();
//     }
// }

// function init(){
//     const wave=new WavesBase;
//     waves.push(wave);
//     wave.draw();
// }  


// document.addEventListener("mousemove",(e)=>{
//     mouse.x=e.x - document.querySelector(".navbar").scrollWidth;
//     mouse.y=e.y;  
//     init();
//     console.log(waves)
// })

// function handleWaves(){
//     for(j=0;j<waves.length;i++){
//         waves[j].update();
//         waves[j],draw();
//     }
// }   

// function animate(){
//     // ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.fillStyle="rgba(29,29,29,0.05)"
//     ctx.fillRect(0,0,canvas.width,canvas.height);
//     requestAnimationFrame(animate)
// }
// animate();

// let candles=[];

// const mouse={
//     latest_x:undefined,
//     latest_y:undefined,
//     x:undefined,
//     y:undefined
// }
// class candlesBase{
//     constructor(x,width){
//         this.x=x;
//         this.y=canvas.height;
//         this.width=width;
//         this.height=0;
//         this.color="#5ae2dc";
//     }   
//     update(newColor){
//         const normalHeight=((canvas.height - mouse.y) * - 1  ) + (canvas.height / 3);
        
//         if(normalHeight < -(canvas.height / 4)  ){
//         this.height=-(canvas.height / 4)
//         }else{
//             this.height=normalHeight;

//         }
//         this.color=newColor;
//     }
//     draw(){
//         ctx.fillStyle=this.color;
//         ctx.fillRect(this.x,this.y,this.width,this.height);
//     }
// }

// const candlesWidth=canvas.width / 75;
// function init(){
//     for (let index = 0; index < 75; index++) {
//         candles.push(new candlesBase(index * candlesWidth,candlesWidth - candlesWidth / 2.3));
//     }
// }
// init();

// function updateCandles(){
//     candles.forEach((element,index)=>{
//         if(element.x < mouse.x && element.x + candlesWidth > mouse.x){
//             if (mouse.x > mouse.latest_x && mouse.x > mouse.latest_x + candlesWidth){
//                 // console.log(mouse)
//                 if(mouse.y > mouse.latest_y){
//                     // console.log("hi2")
//                     element.update("#f02d83");
//                     element.draw();
//                 }else{
//                     element.update("#5ae2dc");
//                     element.draw();
//                 }

//                 mouse.latest_y=element.height + (canvas.height / 3) * 2 

//             }else if(mouse.x < mouse.latest_x && mouse.x < mouse.latest_x + candlesWidth){
//                 if(mouse.y > mouse.latest_y){
//                     // console.log("hi2")
//                     element.update("#f02d83");
//                     element.draw();
//                 }else{
//                     element.update("#5ae2dc");
//                     element.draw();
//                 }
//                 mouse.latest_y=element.height + (canvas.height / 3) * 2
                
//             }else{

//                 if(mouse.y > mouse.latest_y){
                        
//                     element.update("#f02d83");
//                     element.draw();
//                 }else{
                    
//                     element.update("#5ae2dc");
//                     element.draw();
//                 }  
//             }
            
//             mouse.latest_x=element.x;

//         }
//         else{
//             element.draw();
//         }
//     })
// }

// document.addEventListener("mousemove",(e)=>{
//     mouse.y=e.y;
//     mouse.x=e.x - document.querySelector(".navbar").scrollWidth;
//     // console.log(mouse)
// })


// function animate(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     updateCandles();

//     requestAnimationFrame(animate);
// }
// animate()


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
        this.height=Math.random() * -180;
        this.lineHeight=(Math.random() * - 20) + canvas.height + this.height
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

const candlesWidth=canvas.width / 80;
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
                element.height=Math.random() * -180;
                element.lineHeight=(Math.random() * - 50) + canvas.height + element.height
                
                if(element.height > candles[index -1].height){
                    element.update("#f02d83");
                }
                else{
                    element.update("#5ae2dc");
    
                }
                modificationCounter++;
                element.modificationNumber=modificationCounter;
                element.draw();
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


