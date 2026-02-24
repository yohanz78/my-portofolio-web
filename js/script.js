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
