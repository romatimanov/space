import { useEffect, useState } from "react";
import { useAnimate } from "../hook/animate/useAnimate";
import Image from "next/image";
import style from "./works.module.css";
import { useAnimateWork } from "../hook/animate/useAnimateWork";

const images = [
  "/work-alex-nowak.jpg",
  "/work-victory.jpg",
  "/work-metiew-smith.jpg",
];
const text = [
  {
    name: "ALEX NOWAK",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.",
  },
  {
    name: "VICTORY",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.",
  },
  {
    name: "METIEW & SMITH",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.",
  },
];

export function Works() {
  const { animate, containerRef } = useAnimate();
  const [activeImage, setActiveImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animateWork = useAnimateWork({ setIsAnimating });

  const handlePrev = () => {
    animateWork(setActiveImage);
    setActiveImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    if (!isAnimating) {
      animateWork(setActiveImage);
      setActiveImage((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculatePosition = (index: number) => {
    const offset = (index - activeImage + images.length) % images.length;
    if (offset === 0) return style.activeImage;
    if (offset === 1 || offset === -(images.length - 1))
      return style.rightImage;
    if (offset === images.length - 1 || offset === -1) return style.leftImage;
    return "";
  };

  return (
    <div ref={containerRef} className="w-full pt-10">
      <h2 className="text-3xl text-center mb-5">Selected work</h2>
      <div className={style.container}>
        <button onClick={handlePrev} className={style.buttonPrev}>
          <Image
            src="/image/arrow.svg"
            alt="arrow"
            width={20}
            height={20}
            className="z-10 rotate-180"
          />
        </button>
        <div className={`${style.imagesContainer} images`}>
          {images.map((src, index) => (
            <div
              key={src}
              className={`${style.imageContainer} ${calculatePosition(index)}`}
            >
              <Image
                src={src}
                alt={`work ${index}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
          <div className="absolute left-center -bottom-28 w-64">
            <h3 className="text-1xl text-center mb-3">
              {text[activeImage].name}
            </h3>
            <p className="text-center">{text[activeImage].text}</p>
          </div>
        </div>
        <button onClick={handleNext} className={style.buttonNext}>
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={20}
            height={20}
            className="z-10"
          />
        </button>
      </div>
    </div>
  );
}
