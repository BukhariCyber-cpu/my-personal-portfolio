
document.addEventListener("DOMContentLoaded", () => {

    // =================================
    // MOBILE NAVIGATION - FIXED
    // =================================

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    const navLinks = document.querySelectorAll(".nav-link");

    function openMenu() {
        nav.classList.add("show");
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.setAttribute("aria-label", "Close navigation");
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    function closeMenu() {
        nav.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", (event) => {
            event.stopPropagation();

            if (nav.classList.contains("show")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // All navigation links close the mobile menu
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Close menu when clicking outside
        document.addEventListener("click", event => {
            if (
                !nav.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {
                closeMenu();
            }
        });

        // Close menu on Escape key
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        // Close menu when returning to desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 700) {
                closeMenu();
            }
        });
    }


    // =================================
    // ACTIVE NAVIGATION
    // =================================

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveLink() {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveLink);


    // =================================
    // BACK TO TOP
    // =================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // =================================
    // FAQ
    // =================================

    const faqItems = document.querySelectorAll(".faq-list details");

    faqItems.forEach(item => {

        item.addEventListener("toggle", () => {

            if (item.open) {

                faqItems.forEach(otherItem => {

                    if (otherItem !== item) {
                        otherItem.open = false;
                    }

                });
            }
        });
    });


    // =================================
    // CONTACT FORM
    // =================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Please complete all fields.");
                return;
            }

            const phone = "923428155362";

            const whatsappText = `
Hello Jan Muhammad Shah!

Name: ${name}
Email: ${email}
Subject: ${subject}

Project Details:
${message}

Sent from your portfolio website.
            `;

            const whatsappURL =
                "https://wa.me/" + phone +
                "?text=" + encodeURIComponent(whatsappText);

            window.open(whatsappURL, "_blank");

        });
    }


    // =================================
    // CURRENT YEAR
    // =================================

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.textContent =
            "© " + new Date().getFullYear() +
            " Jan Muhammad Shah. All Rights Reserved.";

    }

});
