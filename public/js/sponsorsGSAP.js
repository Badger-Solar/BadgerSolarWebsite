import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.to(".sponsor-block", {
  duration: 2,
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 300, y: 100 },
    ], // Moves from (50,100) to (300,100)
  },
  ease: "linear",
});
