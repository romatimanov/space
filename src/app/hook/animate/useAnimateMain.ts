import gsap from "gsap";
import { useEffect } from "react";

export type AnimateProps = {
  isMenuOpen: boolean;
  content?: string;
  shrink?: string;
  style?: string;
};

export const useAnimateMain = ({
  isMenuOpen,
  content,
  shrink,
}: AnimateProps) => {
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(`.${shrink}`, {
        position: "fixed",
        perspective: "1500px",
        duration: 0.3,
        ease: "linear",
      });
      gsap.to(`.${content}`, {
        translateZ: "-1800px",
        translateX: "-50%",
        rotateY: "45deg",
        cursor: "pointer",
        duration: 0.3,
        outline: "5px solid #0f33ff",
        boxShadow: "6px 0px 10px 10px rgba(15, 51, 255, 0.69)",
        overflow: "hidden",
        height: "80vh",
        ease: "linear",
      });
    } else {
      gsap.to(`.${shrink}`, {
        position: "relative",
        perspective: "1500px",
        duration: 0.3,
        ease: "linear",
      });
      gsap.to(`.${content}`, {
        translateZ: "0",
        translateX: "0",
        rotateY: "0",
        duration: 0.3,
        height: "100vh",
        outline: "none",
        boxShadow: "none",
        overflow: "visible",
        ease: "linear",
      });
    }
  }, [isMenuOpen, content, shrink]);
};
