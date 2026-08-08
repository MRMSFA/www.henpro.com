/* =========================================================

   HenPro Electric Inc
   Electrical Cost Estimator JS

========================================================= */


document.addEventListener("DOMContentLoaded", function(){



/* =========================
   ROOM DATABASE
========================= */


const roomRates = {


    bedroom:{
        points:12,
        price:12000
    },


    drawing:{
        points:18,
        price:18000
    },


    lounge:{
        points:15,
        price:15000
    },


    kitchen:{
        points:20,
        price:25000
    },


    bathroom:{
        points:5,
        price:5000
    },


    garage:{
        points:8,
        price:8000
    }



};





/* =========================
   ELEMENTS
========================= */


const roomInputs =
document.querySelectorAll(".room-count");


const plusButtons =
document.querySelectorAll(".plus");


const minusButtons =
document.querySelectorAll(".minus");


const services =
document.querySelectorAll(".service");



const totalPoints =
document.getElementById("totalPoints");


const totalRooms =
document.getElementById("totalRooms");


const serviceTotal =
document.getElementById("serviceTotal");


const finalCost =
document.getElementById("finalCost");


const mobileFinalCost =
document.getElementById("mobileFinalCost");








/* =========================
   PLUS BUTTON
========================= */


plusButtons.forEach(function(btn){


btn.addEventListener("click",function(){



let input =
this.parentElement.querySelector(".room-count");



input.value =
Number(input.value)+1;



calculateEstimate();



});


});









/* =========================
   MINUS BUTTON
========================= */


minusButtons.forEach(function(btn){


btn.addEventListener("click",function(){



let input =
this.parentElement.querySelector(".room-count");



if(Number(input.value)>0){


input.value =
Number(input.value)-1;


}



calculateEstimate();



});


});








/* =========================
   MANUAL INPUT
========================= */


roomInputs.forEach(function(input){


input.addEventListener("input",function(){


calculateEstimate();


});


});








/* =========================
   SERVICES
========================= */


services.forEach(function(service){


service.addEventListener("change",function(){


calculateEstimate();


});


});









/* =========================
   MAIN CALCULATION
========================= */


function calculateEstimate(){



let points = 0;


let rooms = 0;


let roomCost = 0;







roomInputs.forEach(function(input){



let quantity =
Number(input.value);



let roomName =
input.dataset.room;





if(quantity > 0){


rooms += quantity;



points +=
roomRates[roomName].points * quantity;



roomCost +=
roomRates[roomName].price * quantity;



}



});









/* =========================
   EXTRA SERVICES
========================= */


let extraServices = 0;



services.forEach(function(service){



if(service.checked){


extraServices +=
Number(service.dataset.price);


}



});








/* =========================
   FINAL PRICE
========================= */


let total =
roomCost +
extraServices;







/* =========================
   DISPLAY
========================= */


totalPoints.innerHTML =
points;



totalRooms.innerHTML =
rooms;



serviceTotal.innerHTML =
"PKR " + extraServices.toLocaleString();



finalCost.innerHTML =
"PKR " + total.toLocaleString();


if(mobileFinalCost){

    mobileFinalCost.innerHTML =
    "PKR " + total.toLocaleString();

}



}







// Initial calculation

calculateEstimate(); 
/* =========================
   HIDE MOBILE BAR ON SUMMARY + FOOTER AREA
========================= */


const mobileBar = document.querySelector(".mobile-estimate-bar");

const summarySection = document.querySelector(".estimate-summary");

const footer = document.querySelector(".footer");



if(mobileBar && summarySection){



function checkMobileBar(){


    const summaryTop = summarySection.getBoundingClientRect().top;

    const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;


    const screenHeight = window.innerHeight;



    if(
        summaryTop < screenHeight * 0.7 ||
        footerTop < screenHeight
    ){


        mobileBar.style.display="none";


    }
    else{


        mobileBar.style.display="flex";


    }



}



window.addEventListener("scroll", checkMobileBar);


checkMobileBar();



}



});