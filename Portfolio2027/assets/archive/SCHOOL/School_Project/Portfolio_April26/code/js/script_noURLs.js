/* ===================================
   Project: [Portfolio | Senna Klijn]
   "School Portfolio"
   File: script_noURLs.js
   Author: [Senna Klijn]
   Vital to: about.html
   Description: Secondary script
   =================================== */

/* ==========================
      scroll X - mechanism  
 ========================== */

// variables
   const scroll_X_Cont = document.querySelector(".cardContainerX");
   
// scroll x functie in scrollX section
   scroll_X_Cont.addEventListener("wheel", (wheel) => {

   wheel.preventDefault();
   scroll_X_Cont.scrollLeft += wheel.deltaY;


   console.log(scroll_X_Cont)

   });



// span click
const glr = document.querySelector("#glr");

glr.addEventListener("click", () => {
    window.open(
        "https://www.glr.nl/opleidingen/software-developer",
        "_blank",
        "noopener,noreferrer"
    );
});


// card anti hover ˜ (ensures mouse enter; default, mouse leave; "")
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => card.style.cursor = "default");
  card.addEventListener("mouseleave", () => card.style.cursor = "auto");
});