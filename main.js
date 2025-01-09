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
const outputRef = document.querySelector('.outputRef');
const fileInputRef = document.querySelector("#referenzbilder");

fileInputRef.addEventListener("change", () => {
    for (const file of fileInputRef.files) {
        outputRef.innerText += `\n${file.name}`;
    }
});

const outputKoerper = document.querySelector('.outputKoerper');
const fileInputKoerper = document.querySelector("#koerperstelle");
fileInputKoerper.addEventListener("change", () => {
    for (const file of fileInputKoerper.files) {
        outputKoerper.innerText += `\n${file.name}`;
    }
});

const outputWunsch = document.querySelector('.outputWunsch');
const fileInputWunsch = document.querySelector("#wunschmotiv");
fileInputWunsch.addEventListener("change", () => {
    for (const file of fileInputWunsch.files) {
        outputWunsch.innerText += `\n${file.name}`;
    }
});

const outputBild = document.querySelector('.outputBild');
const fileInputKoerper2 = document.querySelector("#koerperbilder");
fileInputKoerper2.addEventListener("change", () => {
    for (const file of fileInputKoerper2.files) {
        outputBild.innerText += `\n${file.name}`;
    }
});