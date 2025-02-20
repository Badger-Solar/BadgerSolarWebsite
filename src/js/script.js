const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const sectionInnnerCenter = document.getElementById('section-inner-center');
const counters = document.querySelectorAll('.counter');
const aboutSection = document.querySelector(".about");
let lastScrollTop = 0; // To keep track of the last scroll position
const navbar = document.querySelector('.main-header'); // Get the navbar
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollpage)
window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hide-navbar');
    } else {
        // Scrolling up
        navbar.classList.remove('hide-navbar');
    }
    
    // Update lastScrollTop to the current scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('no-scroll');
    menu.classList.toggle('show-menu');
}

function scrollpage() {

    if (window.scrollY > 100 && !scrollStarted) {
        countUp();
        // sectionInnnerCenter.classList.toggle('section-inner-center-show');
        scrollStarted = true;
    } else if (window.scrollY < 100 && scrollStarted) { 
        resetCounter();
        // sectionInnnerCenter.classList.toggle('section-inner-center-show');
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 100;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        }

        updateCounter();
    });
}

function removeText() {
    counters.forEach((counter) => {
        counter.innerText = '';
    });
}

function resetCounter() {
    counters.forEach((counter) => {
        counter.innerText = '0';
    });
    
}

document.addEventListener("DOMContentLoaded", function () {
    const aboutTextElements = document.querySelectorAll(".about h2, .about p");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        aboutTextElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const fadeStart = window.innerHeight / 2.5; // Start fading when halfway through the viewport

            if (rect.top < fadeStart) {
                let opacity = 1 - (fadeStart - rect.top) / 100;
                opacity = Math.max(opacity, 0);
                let translateY = -((fadeStart - rect.top) / 2);

                element.style.opacity = opacity;
                element.style.transform = `translateY(${translateY}px)`;
            } else {
                element.style.opacity = 1;
                element.style.transform = "translateY(0px)";
            }
        });
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to handle scroll events and trigger the animation
function handleScroll() {
    const elements = document.querySelectorAll('.js-stagger');
    
    elements.forEach((element) => {
        if (isInView(element)) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)'; // Reset transform for smooth animation
        }
    });
}

window.addEventListener('scroll', handleScroll);

// Trigger scroll check immediately to handle already-visible elements on page load
handleScroll()

