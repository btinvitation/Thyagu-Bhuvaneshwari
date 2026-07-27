/* ==========================================
   BHUVANESHWARI ❤️ THYAGU
   INVITATION SCRIPT
========================================== */


/* =========================
LOADER
========================= */

window.addEventListener("load",()=>{

    gsap.to("#loader",{

        opacity:0,

        duration:1.2,

        delay:1.5,

        onComplete:()=>{

            document.getElementById("loader").style.display="none";

        }

    });

});



/* =========================
AOS
========================= */


AOS.init({

    duration:1200,

    once:true

});





/* =========================
ENVELOPE OPENING
========================= */


const openBtn = document.getElementById("openBtn");

const flap = document.querySelector(".flap");

const letter = document.querySelector(".letter");


gsap.set(letter,{

    opacity:0,

    y:80

});



openBtn.addEventListener("click",()=>{


    gsap.to(flap,{

        rotateX:-180,

        duration:1.2,

        ease:"power2.inOut"

    });



    gsap.to(letter,{

        opacity:1,

        y:-180,

        duration:1.5,

        delay:.5,

        ease:"power3.out"

    });



    gsap.to(".tap-text",{

        opacity:0,

        duration:.5

    });


});
