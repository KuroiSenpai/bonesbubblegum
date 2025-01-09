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

function showForm(formID) {
    const forms = document.querySelectorAll('.artist-form');
    forms.forEach(form => {
        form.style.display = 'none';
    });

    const selectedForm = document.getElementById(formID);
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }
}

function showMotiv(motivID) {
    const motiv = document.querySelectorAll('.motiv');
    motiv.forEach(form => {
        form.style.display = 'none';
    });

    const selectedMotiv = document.getElementById(motivID);
    if (selectedMotiv) {
        selectedMotiv.style.display = 'block';
    }
}