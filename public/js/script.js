const menu_btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const sectionInnnerCenter = document.getElementById("section-inner-center");
const aboutSection = document.querySelector(".about");
let lastScrollTop = 0; // To keep track of the last scroll position
const navbar = document.querySelector(".main-header"); // Get the navbar
let scrollStarted = false;

const navToggle = () => {
  menu_btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("no-scroll");
  menu.classList.toggle("show-menu");
};



menu_btn.addEventListener("click", navToggle);
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("hide-navbar");
  } else {
    // Scrolling up
    navbar.classList.remove("hide-navbar");
  }

  // Update lastScrollTop to the current scroll position
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutTextElements = document.querySelectorAll(".about h2, .about p");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    aboutTextElements.forEach((element) => {
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

const isInView = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

// Function to handle scroll events and trigger the animation
const handleScroll = () => {
  const elements = document.querySelectorAll(".js-stagger");

  elements.forEach((element) => {
    if (isInView(element)) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)"; // Reset transform for smooth animation
    }
  });
};

window.addEventListener("scroll", handleScroll);

// Trigger scroll check immediately to handle already-visible elements on page load
handleScroll();
