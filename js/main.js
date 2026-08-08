/* =========================================================

   HenPro Electric Inc
   Main Website JS

========================================================= */



document.addEventListener("DOMContentLoaded",function(){





/* =========================
   NAVBAR SCROLL EFFECT
========================= */


const header = document.querySelector(".header");



window.addEventListener("scroll",function(){



if(window.scrollY > 50){


header.classList.add("sticky");


}

else{


header.classList.remove("sticky");


}



});









/* =========================
   BACK TO TOP BUTTON
========================= */


const backTop = document.querySelector(".back-top");



if(backTop){



window.addEventListener("scroll",function(){



if(window.scrollY > 400){


backTop.classList.add("show");


}

else{


backTop.classList.remove("show");


}



});





backTop.addEventListener("click",function(){



window.scrollTo({


top:0,


behavior:"smooth"


});



});



}









/* =========================
   SCROLL REVEAL ANIMATION
========================= */



const revealElements =
document.querySelectorAll(
".card, .why-card, .about-box, .certificate-box, .project-intro, .contact-card"
);





const revealOnScroll = function(){



revealElements.forEach(function(element){



const position =
element.getBoundingClientRect().top;



const screen =
window.innerHeight - 100;





if(position < screen){



element.classList.add("reveal");


}



});



};





window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();









/* =========================
   CURRENT YEAR
========================= */


const year =
document.querySelector(".copyright");



if(year){



const currentYear =
new Date().getFullYear();



year.innerHTML =
year.innerHTML.replace(
"2026",
currentYear
);



}









/* =========================
   SMOOTH SCROLL
========================= */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(function(anchor){



anchor.addEventListener(
"click",
function(e){



const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});



});






});