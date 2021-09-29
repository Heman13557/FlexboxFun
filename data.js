const panel = document.querySelectorAll(".panel");
 function toggleopen(){
     this.classList.toggle("open-active");
 }

 panel.forEach(panel => panel.addEventListener("click",toggleopen));