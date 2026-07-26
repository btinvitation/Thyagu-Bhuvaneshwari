// ======================================
// Bhuvaneshwari ❤️ Thyagu Reception
// Step 5
// ======================================

AOS.init({
    duration: 1000,
    once: true
});

const envelope = document.querySelector(".envelope");
const envelopeScreen = document.getElementById("envelope-screen");
const hero = document.querySelector(".hero");

hero.style.display = "none";

// Tap the envelope to open
envelope.addEventListener("click", function () {

    if (!envelope.classList.contains("open")) {

        envelope.classList.add("open");

    }

});

// Tap the button after the letter slides out
document.getElementById("openLetter").addEventListener("click", function (e) {

    e.stopPropagation();

    gsap.to("#envelope-screen", {
        opacity: 0,
        duration: 1,
        onComplete: function () {

            envelopeScreen.style.display = "none";

            hero.style.display = "flex";

            gsap.from(".hero-content", {
                y: 80,
                opacity: 0,
                duration: 1.2
            });

        }

    });

});
