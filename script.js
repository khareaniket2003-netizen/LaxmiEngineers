
/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}


/* AUTOMATIC FOOTER YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* CONTACT FORM - WHATSAPP */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !service || !message) {
            if (formStatus) {
                formStatus.textContent = "Please fill in all fields.";
            }
            return;
        }

        const whatsappMessage =
            "Hello Laxmi Engineers!%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Service: " + encodeURIComponent(service) + "%0A" +
            "Project Details: " + encodeURIComponent(message);

        // Laxmi Engineers contact: Ajay Khare
        const whatsappNumber = "917710885291";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + whatsappMessage;

        if (formStatus) {
            formStatus.textContent =
                "Opening WhatsApp to send your enquiry...";
        }

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
