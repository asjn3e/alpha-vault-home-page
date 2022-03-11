document.querySelectorAll(".navbar__toggler").forEach(element =>{
    element.addEventListener("click",()=>{
        document.querySelector(".collapsible").classList.toggle("collapsible--expanded")
    })
})