document.querySelectorAll(".collapsible").forEach(element =>{
    element.addEventListener("click",()=>{
        element.classList.toggle("collapsible--expanded")
    })
})