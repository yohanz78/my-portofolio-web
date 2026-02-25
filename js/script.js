function scrollToSection(href) {
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log("Form submitted:", { name, email, message });
    alert("Thank you for your message! I'll get back to you soon.");

    form.reset();
}

// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable common keyboard shortcuts
document.addEventListener("keydown", function (e) {
    // Disable F12
    // if (e.key === "F12") {
    //     e.preventDefault();
    // }
    // Disable Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
        e.preventDefault();
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
    }
});

// ── Carousel (autoplay only) ──
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".carousel__track");
    const slides = carousel.querySelectorAll(".carousel__slide");
    const total = slides.length;
    let current = 0;
    let timer;

    function goTo(index) {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
    }

    function startAutoplay() {
        timer = setInterval(() => goTo(current + 1), 2500);
    }

    function stopAutoplay() {
        clearInterval(timer);
    }

    // Pause while user hovers so overlay links remain clickable
    const card = carousel.closest(".project-card");
    if (card) {
        card.addEventListener("mouseenter", stopAutoplay);
        card.addEventListener("mouseleave", startAutoplay);
    }

    goTo(0);
    startAutoplay();
});

/**
 * Resposive Web Design
 */
// ── Hamburger Menu ──
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

// Create overlay element
const overlay = document.createElement("div");
overlay.classList.add("nav__overlay");
document.body.appendChild(overlay);

function openMenu() {
    hamburger.classList.add("is-open");
    navList.classList.add("is-open");
    overlay.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    hamburger.classList.remove("is-open");
    navList.classList.remove("is-open");
    overlay.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

// Close menu when a nav link is clicked
navList.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
});
