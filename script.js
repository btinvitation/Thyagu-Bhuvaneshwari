/* ==========================================
   BHUVANESHWARI ❤️ THYAGU
   INVITATION ANIMATIONS
========================================== */


/* =========================
LOADER
========================= */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        gsap.to("#loader",{

            opacity:0,

            duration:1,

            onComplete:()=>{

                document.querySelector("#loader").style.display="none";

            }

        });

    },2000);


});



/* =========================
ENVELOPE OPEN
========================= */


const openBtn = document.getElementById("openBtn");

const topFold = document.querySelector(".top-fold");

const letter = document.querySelector(".letter");

gsap.set(letter,{
    opacity:0,
    y:80
});
openBtn.addEventListener("click",()=>{

console.log("Button clicked");
    gsap.to(topFold,{

        rotationX:-180,

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

/* =========================
AOS INITIALIZATION
========================= */

AOS.init({

    duration:1200,

    once:true

});



/* =========================
FLOWER PETALS
========================= */

function createPetals(){

    const container = document.querySelector(".particles");


    for(let i=0;i<40;i++){

        let petal=document.createElement("span");


        petal.className="petal";


        petal.style.left=Math.random()*100+"%";


        petal.style.animationDuration=

        (5+Math.random()*5)+"s";


        petal.style.animationDelay=

        Math.random()*5+"s";


        container.appendChild(petal);

    }

}


createPetals();



/* =========================
SMOOTH OPEN EFFECT
========================= */


window.addEventListener("scroll",()=>{


    let scrollValue = window.scrollY;


    gsap.to(".gold-glow",{

        y:scrollValue*0.2,

        duration:0.5

    });


});
