/* ==========================================
   BHUVANESHWARI ❤️ THYAGU
   INVITATION SCRIPT
========================================== */


/* =========================
LOADER
========================= */


window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");


    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.transition="1s";


        setTimeout(()=>{

            loader.style.display="none";

        },1000);


    },1500);


});





/* =========================
ENVELOPE OPENING
========================= */


const openBtn = document.getElementById("openBtn");

const envelope = document.getElementById("envelope");



openBtn.addEventListener("click",()=>{


    envelope.classList.add("open");


    document.querySelector(".tap-text").style.opacity="0";


});
