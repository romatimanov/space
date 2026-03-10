import { useRef } from "react";
import gsap from "gsap";

export const useAnimate = () => {
  const containerRef = useRef(null);

  const animate = () => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  };

  const animateContact = () => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  };

  return { animate, containerRef, animateContact };
};
