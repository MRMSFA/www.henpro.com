/*=========================================================
 HenPro Electric Inc
 Contact Page JavaScript
=========================================================*/


document.addEventListener("DOMContentLoaded", function(){



/* ================= EMAILJS PLACEHOLDERS ================= */


const EMAILJS_SERVICE_ID = "service_viv59c8";

const EMAILJS_TEMPLATE_ID = "template_vcokqas";

const EMAILJS_PUBLIC_KEY = "jawqBlwX5ChazXQVI";







/* ================= CALL DROPDOWN ================= */


window.toggleCallBox = function(){


    const phoneBox = document.getElementById("phoneOptions");


    if(phoneBox){


        phoneBox.classList.toggle("show");


    }


};








/* ================= CLOSE PHONE BOX OUTSIDE CLICK ================= */



document.addEventListener("click", function(event){


    const callBox = document.querySelector(".call-box");

    const phoneBox = document.getElementById("phoneOptions");



    if(
        callBox &&
        phoneBox &&
        !callBox.contains(event.target) &&
        !phoneBox.contains(event.target)
    ){


        phoneBox.classList.remove("show");


    }



});









/* ================= CONTACT FORM ================= */



const contactForm = document.getElementById("contactForm");


const formMessage = document.getElementById("formMessage");







if(contactForm){



contactForm.addEventListener("submit", function(e){



    e.preventDefault();





    const name =
    document.getElementById("name").value.trim();




    const phone =
    document.getElementById("phone").value.trim();




    const email =
    document.getElementById("email").value.trim();




    const project =
    document.getElementById("project").value;




    const location =
    document.getElementById("location").value.trim();




    const area =
    document.getElementById("area").value.trim();




    const message =
    document.getElementById("message").value.trim();







    if(
        name === "" ||
        phone === "" ||
        email === "" ||
        project === ""
    ){



        formMessage.style.color="red";


        formMessage.innerHTML =
        "Please fill all required fields.";


        return;


    }







    /* ================= EMAILJS SEND ================= */



    const templateParams = {


        name:name,

        phone:phone,

        email:email,

        project:project,

        location:location,

        area:area,

        message:message


    };







    if(typeof emailjs !== "undefined"){



        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        )



        .then(function(){



            formMessage.style.color="green";


            formMessage.innerHTML =
            "Thank you! Your enquiry has been sent successfully. HenPro team will contact you soon.";



            contactForm.reset();



        })




        .catch(function(error){



            formMessage.style.color="red";


            formMessage.innerHTML =
            "Sorry! Your enquiry could not be sent. Please try again.";



            console.log(error);



        });



    }

    else {



        formMessage.style.color="red";


        formMessage.innerHTML =
        "Email service is not connected yet.";


    }







});



}







});