// Navigation
const menuBtn = document.getElementById("menu");
menuBtn.addEventListener('click', toggleNav);

function toggleNav() {
    const nav = document.getElementById("main-navigation");

    if (menuBtn.textContent === "Exit") {
        nav.classList.remove('showNav');
        menuBtn.textContent = "Menu";
        console.log('exit')
    }
    else if (menuBtn.textContent === "Menu") {
        nav.classList.add('showNav');
        menuBtn.textContent = "Exit";
    }
};

// Movable Arrow
let scrollInterval;
const content = document.getElementById('selections');
function move(control) {
    stopScrolling();
    scrollInterval = setInterval(function() {
        content.scrollLeft += control;
    }, 10)
}

function stopScrolling() {
    clearInterval(scrollInterval);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Slide function
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.team-box');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

// Auto Slide
function autoSlides() {
    plusSlides(+1);
    setTimeout(autoSlides, 8000);
}
autoSlides();