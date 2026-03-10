import gsap from "gsap";
import { useEffect } from "react";
import { AnimateProps } from "./useAnimateMain";

export const useAnimateMenu = ({ isMenuOpen, style }: AnimateProps) => {
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 798px)").matches;

      const position = isSmallScreen ? "0" : "20%";

      if (isMenuOpen) {
        gsap.to(`.${style}`, {
          position: "absolute",
          duration: 0.4,
          top: "20%",
          right: position,
          translateX: "0",
          scale: 1,
          opacity: 1,
          ease: "linear",
        });
      } else {
        gsap.to(`.${style}`, {
          position: "absolute",
          duration: 0.3,
          top: "20%",
          right: position,
          translateX: "200px",
          scale: 0,
          opacity: 1,
          ease: "linear",
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, style]);
};
