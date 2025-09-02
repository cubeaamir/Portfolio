// Sticky header on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 130);
});

// Menu toggle for mobile
let menu = document.querySelector("#menu-icon");
let menulist = document.querySelector(".menulist");
let body = document.body;

menu.onclick = () => {
    const isOpen = menulist.classList.toggle("open");
    menu.classList.toggle("bx-x", isOpen);

    // Toggle body scroll lock
    body.style.overflow = isOpen ? "hidden" : "auto";
};

// Close menu on scroll
window.onscroll = () => {
    menu.classList.remove("bx-x");
    menulist.classList.remove("open");
    body.style.overflow = "auto";
};

// Close menu on nav link click
document.querySelectorAll(".menulist a").forEach(link => {
    link.addEventListener("click", () => {
        menulist.classList.remove("open");
        menu.classList.remove("bx-x");
        body.style.overflow = "auto";
    });
});

// Typed.js effect
if (document.querySelector(".input")) {
    new Typed(".input", {
        strings: [
            "Data Analyst,",
            "Graphic designer,",
            "Web Developer,",
            "Tech Youtuber.",
            "Photographer & Video Editor."
            
    
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 800,
        startDelay: 300,
        loop: true
    });
}
// ===== ScrollSpy Navigation Active Link =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menulist a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150; // adjust offset for sticky header
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

