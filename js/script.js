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
    if (e.key === "F12") {
        e.preventDefault();
    }
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
