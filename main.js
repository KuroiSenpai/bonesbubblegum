const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});

const mainButton = document.querySelector(".main-btn");
const socialButtons = document.querySelector(".social-buttons");

mainButton.addEventListener("click", () => {
    const isVisible = socialButtons.style.display === "flex";
    socialButtons.style.display = isVisible ? "none" : "flex";
});