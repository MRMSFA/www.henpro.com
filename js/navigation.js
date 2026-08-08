/* =========================================================

   HenPro Electric Inc
   Navigation JS

========================================================= */


document.addEventListener("DOMContentLoaded", function(){



const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("navLinks");





// Mobile Menu Toggle

if(hamburger && navLinks){



hamburger.addEventListener("click", function(){


navLinks.classList.toggle("active");



hamburger.classList.toggle("open");



});



}







// Close Menu When Link Clicked


const links = document.querySelectorAll(".nav-links a");



links.forEach(function(link){


link.addEventListener("click",function(){


if(navLinks.classList.contains("active")){


navLinks.classList.remove("active");


hamburger.classList.remove("open");


}



});


});








// Close Menu Outside Click


document.addEventListener("click",function(e){



if(
navLinks &&
hamburger &&
!navLinks.contains(e.target) &&
!hamburger.contains(e.target)

){


navLinks.classList.remove("active");


hamburger.classList.remove("open");


}



});







});