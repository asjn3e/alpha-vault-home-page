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

let candles=[];

class candlesBase{
    constructor(){
        this.x=undefined;
        this.y=undefined;
        this.width=undefined;
        this.height=undefined;
        this.color=undefined;
    }   
    update(){
            
    }
    draw(){
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
}