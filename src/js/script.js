const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const sectionInnnerCenter = document.getElementById('section-inner-center');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollpage)

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
