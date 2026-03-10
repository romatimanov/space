import gsap from "gsap";

type AnimateProps = {
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useAnimateWork =
  ({ setIsAnimating }: AnimateProps) =>
  ({}) => {
    setIsAnimating(true);
    gsap.from(".images", {
      position: "relative",
      opacity: 0,
      duration: 0.6,
      delay: 1,
      ease: "linear",
    });
    gsap.to(".images", {
      opacity: 1,
      duration: 0.6,
      delay: 1,
      ease: "linear",
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  };
