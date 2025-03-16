import { gsap } from "gsap";

// Select the element
const box = document.getElementById("myBox");

// Run your GSAP animation
gsap.to(box, {
  x: 200, // move 200px to the right
  rotation: 360, // rotate one full turn
  duration: 1.5, // over 1.5 seconds
  ease: "power1.inOut",
});
