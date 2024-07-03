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
const btnLeft =  document.querySelector('#genres .arrow:first-child');
const btnRight = document.querySelector('#genres .arrow:last-child');
const scrollmount = 100;

if (document.title === "IBook - Corporate Website - Products Page") {
    btnLeft.addEventListener('click', () => {
        content.scrollBy({
            left: -scrollmount,
            behavior: 'smooth'
        })
    });
    
    btnRight.addEventListener('click', () => {
        content.scrollBy({
            left: scrollmount,
            behavior: 'smooth'
        })
    });    
}


function move(control) {
    stopScrolling();
    scrollInterval = setInterval(function() {
        content.scrollLeft += control;
    }, 10)
}

function stopScrolling() {
    clearInterval(scrollInterval);
}

// Next/previous controls
let slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Slide function
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.team-box');
    try {
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "flex";
    }
    catch (e) {
        console.log("Something went wrong");
    }
    
}

// Auto Slide
function autoSlides() {
    plusSlides(+1);
    setTimeout(autoSlides, 8000);
}

if (document.title === "IBook - Corporate Website - Careers Page") {
    autoSlides();
    showSlides(slideIndex);
}