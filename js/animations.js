/*=========================================================
    HenPro Electric Inc
    animations.js
    PART 1
=========================================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /*====================================
      REVEAL ELEMENTS
    ====================================*/

    const revealItems = document.querySelectorAll(

        ".reveal,\
        .card,\
        .service-card,\
        .project-card,\
        .why-card,\
        .certificate-box,\
        .estimate-box,\
        .contact-card,\
        .info-card,\
        .why-contact-card"

    );



    /*====================================
      INTERSECTION OBSERVER
    ====================================*/

    const observer = new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold:0.15,

            rootMargin:"0px 0px -80px 0px"

        }

    );



    revealItems.forEach(item=>{

        item.classList.add("reveal");

        observer.observe(item);

    });




    /*====================================
      IMAGE FADE
    ====================================*/

    const images = document.querySelectorAll("img");

    images.forEach(img=>{

        if(img.complete){

            img.style.opacity="1";

            return;

        }

        img.style.transition=".4s";

        img.style.opacity=".2";

        img.onload=()=>{

            img.style.opacity="1";

        };

    });




    /*====================================
      FLOAT ELEMENTS
    ====================================*/

    document

    .querySelectorAll(".float")

    .forEach(el=>{

        el.style.animation="float 3s ease-in-out infinite";

    });





    /*====================================
      PULSE ELEMENTS
    ====================================*/

    document

    .querySelectorAll(".pulse")

    .forEach(el=>{

        el.style.animation="pulse 2s infinite";

    });





    /*====================================
      BUTTON RIPPLE
    ====================================*/

    const buttons = document.querySelectorAll(

        ".btn,button,.quote-btn"

    );



    buttons.forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            ripple.style.position="absolute";

            ripple.style.width="12px";

            ripple.style.height="12px";

            ripple.style.borderRadius="50%";

            ripple.style.background="rgba(255,255,255,.6)";

            ripple.style.left=

            e.offsetX+"px";

            ripple.style.top=

            e.offsetY+"px";

            ripple.style.transform="scale(0)";

            ripple.style.pointerEvents="none";

            ripple.style.transition=".6s";

            this.appendChild(ripple);

            requestAnimationFrame(()=>{

                ripple.style.transform="scale(18)";

                ripple.style.opacity="0";

            });

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

});/*=========================================================
    HenPro Electric Inc
    animations.js
    PART 2 (FINAL)
=========================================================*/



document.addEventListener("DOMContentLoaded",()=>{





/*====================================
 COUNTER ANIMATION
====================================*/


const counters = document.querySelectorAll(".counter");


const runCounter = (counter)=>{


let target = 
Number(counter.dataset.target);


let count = 0;


let speed = target / 80;



let update = ()=>{


count += speed;


if(count < target){


counter.innerText = Math.ceil(count);


requestAnimationFrame(update);


}

else{


counter.innerText = target;


}


};


update();


};






const counterObserver = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


runCounter(entry.target);


counterObserver.unobserve(entry.target);


}


});


},{


threshold:.5


});





counters.forEach(counter=>{


counterObserver.observe(counter);


});









/*====================================
 NAVBAR SCROLL EFFECT
====================================*/


const header = document.querySelector(".header");



if(header){



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.classList.add("scrolled");


}

else{


header.classList.remove("scrolled");


}


});


}









/*====================================
 TILT EFFECT FOR CARDS
====================================*/


const tiltCards =
document.querySelectorAll(".tilt-card");



tiltCards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{



let rect =
card.getBoundingClientRect();



let x =
e.clientX - rect.left;


let y =
e.clientY - rect.top;



let rotateX =
((y - rect.height/2) / 20) * -1;



let rotateY =
((x - rect.width/2) / 20);



card.style.transform =

`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;



});






card.addEventListener("mouseleave",()=>{


card.style.transform=

"perspective(800px) rotateX(0) rotateY(0)";


});



});









/*====================================
 ACTIVE PAGE HIGHLIGHT
====================================*/


const currentPage =
window.location.pathname.split("/").pop();



document.querySelectorAll(".nav-links a")
.forEach(link=>{


let linkPage =
link.getAttribute("href");


if(linkPage === currentPage){


link.classList.add("active");


}


});









/*====================================
 BACK TO TOP BUTTON
====================================*/


const topButton =
document.querySelector(".back-top");



if(topButton){



window.addEventListener("scroll",()=>{


if(window.scrollY > 400){


topButton.classList.add("show");


}

else{


topButton.classList.remove("show");


}


});





topButton.addEventListener("click",()=>{


window.scrollTo({


top:0,


behavior:"smooth"


});


});



}









/*====================================
 LAZY LOAD ANIMATION
====================================*/


const lazyElements =
document.querySelectorAll("[data-animation]");



lazyElements.forEach(element=>{


let animation =
element.dataset.animation;



element.style.animation =
`${animation} .8s ease forwards`;



});









/*====================================
 PAGE LOAD CLASS
====================================*/


document.body.classList.add("page-loaded");








});