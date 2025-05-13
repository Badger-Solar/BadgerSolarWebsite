const sectionInnnerCenter = document.getElementById("section-inner-center");
const aboutSection = document.querySelector(".about");
let lastScrollTop = 0; // To keep track of the last scroll position
let scrollStarted = false;


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
