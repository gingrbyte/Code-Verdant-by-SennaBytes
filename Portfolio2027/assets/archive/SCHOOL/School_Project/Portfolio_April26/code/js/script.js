/* ===================================
   Project: [Portfolio | Senna Klijn]
   "School Portfolio"
   File: script.js
   Author: [Senna Klijn]
   Vital to: index.html
   Description: Main script
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



/* ==========================
     cards - url functions  
 ========================== */

// variables
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");
const card6 = document.querySelector(".card6");

// card url onclick
card1.addEventListener("click", () => {window.open("https://www.figma.com/design/d2IECM1sqMqqXpnAsHSUxS/PERSONAL-PROJECT-LABUBU--May-1--2026-?m=auto&t=iwZs7fGEQXOnykIg-6", "_blank");});
card2.addEventListener("click", () => {window.open("https://103580.stu.sd-lab.nl/OpenDag/LJ1/103580-INTERFACE1/index.html", "_blank");});
card3.addEventListener("click", () => {window.open("https://103580.stu.sd-lab.nl/LJ1/BRP/QUIZLERS/Quizlers/Quizlers_About/home.html?classId=6b1fecd3-81ef-4d04-97b4-0ac8f3d78239&assignmentId=1abace7c-1ee7-4631-8ab6-6a72e598c87d&submissionId=da5dfa10-1051-ab36-1764-e4ad241a01bd", "_blank");});
card4.addEventListener("click", () => {window.open("https://www.figma.com/design/HdAfCH4W1KnVnhkX8VBX2L/SCHOOL-PROJECT-%22StijlSpins%22--Y1P3-?m=auto&t=iwZs7fGEQXOnykIg-1", "_blank");});
card5.addEventListener("click", () => {window.open("https://www.figma.com/design/v0xep4VgutN1D854gAzWf7/SCHOOL-PROJECT-%22Nuit-Rivier%22--Y1P1-?m=auto&t=iwZs7fGEQXOnykIg-1", "_blank");});
card6.addEventListener("click", () => {window.open("https://103580.stu.sd-lab.nl/OpenDag/LJ1/Opdracht%207.2%202/home.html", "_blank");});



