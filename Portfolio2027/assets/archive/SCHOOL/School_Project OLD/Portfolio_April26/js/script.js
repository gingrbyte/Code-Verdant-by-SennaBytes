/* ===================================
   Project: [Portfolio | Senna Klijn]
   File: script.js
   Author: [Senna Klijn]
   Description: Main script
   =================================== */

/* ==========================
       content styling  
 ========================== */

// Variables
const bg = document.querySelector(".bg");
const mb = document.querySelector(".mb");
const mm = document.querySelector(".mm");
const mf = document.querySelector(".mf");
const fr = document.querySelector(".fr");

// World size - scroll smoothness
const world = document.querySelector(".bg");
const maxScroll = world.scrollWidth - window.innerWidth;

const ease = 0.12;
let target = 0;
let current = 0;



// Scrolling Input fast-function
window.addEventListener("wheel", (e) => {
   e.preventDefault();
   target += (e.deltaY || e.deltaX) * 1;
   target = Math.max(0, Math.min(target, maxScroll));
   current = Math.max(0, Math.min(current, maxScroll));

   console.log(target)
   console.log(current)

}, { passive: false });

// Scrolling Animation function
function scrollAni() {

   current += (target - current) * ease;

   bg.style.transform = `translateX(${-current * -0.2}px)`;
   mb.style.transform = `translateX(${-current * -0.4}px)`;
   mm.style.transform = `translateX(${-current * -0.6}px)`;
   mf.style.transform = `translateX(${-current * -0.8}px)`;
   fr.style.transform = `translateX(${-current * -1}px)`;

   requestAnimationFrame(scrollAni);
   // checkt frames ^ x
}

scrollAni();

console.log(scrollAni())







   