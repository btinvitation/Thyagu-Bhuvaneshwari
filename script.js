/* ==========================================
   BHUVANESHWARI ❤️ THYAGU
   PREMIUM INVITATION
   PART 1
========================================== */

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}

/* =========================
LOADER
========================= */

window.addEventListener("load", () => {

    gsap.to("#loader", {

        opacity: 0,

        duration: 1.2,

        delay: 2,

        onComplete: () => {

            document.getElementById("loader").style.display = "none";

        }

    });

});

/* =========================
ELEMENTS
========================= */

const envelope = document.querySelector(".envelope");

const envelopeTop = document.querySelector(".envelope-top");

const letter = document.querySelector(".letter");

const openBtn = document.getElementById("openInvitation");

const envelopeScreen = document.getElementById("envelope-screen");

const invitation = document.getElementById("mainInvitation");

/* =========================
INITIAL STATE
========================= */

gsap.set(invitation,{
    display:"none",
    opacity:0
});

gsap.set(openBtn,{
    opacity:0,
    pointerEvents:"none"
});

/* =========================
ENVELOPE IDLE ANIMATION
========================= */

gsap.to(".envelope",{

    y:-8,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"power1.inOut"

});

/* =========================
GOLD GLOW
========================= */

gsap.to(".envelope-shadow",{

    scale:1.08,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

/* =========================
OPEN ENVELOPE
========================= */

let opened=false;

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened=true;

    const tl=gsap.timeline();

    tl.to(envelopeTop,{

        rotationX:-180,

        duration:1,

        transformOrigin:"top center",

        ease:"power2.inOut"

    })

    .to(letter,{

        y:-150,

        duration:1.3,

        ease:"power3.out"

    },"-=0.2")

    .to(openBtn,{

        opacity:1,

        pointerEvents:"auto",

        duration:.5

    });

});
