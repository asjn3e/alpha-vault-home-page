document.querySelectorAll(".navbar__toggler").forEach(element =>{
    element.addEventListener("click",()=>{
        document.querySelector(".collapsible").classList.toggle("collapsible--expanded")
    })
})


const countDownDate=new Date("apr 30,2026 00:00:00").getTime();
console.log(countDownDate)

const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
  
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    const spans=document.querySelectorAll(".timerP");
    spans[0].innerText=days;
    spans[1].innerText=hours;
    spans[2].innerText=minutes;
    spans[3].innerText=seconds;
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
