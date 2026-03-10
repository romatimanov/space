import { useEffect } from "react";
import { useAnimate } from "../hook/animate/useAnimate";
import styles from "./about.module.css";
import Image from "next/image";

export function About() {
  const { animate, containerRef } = useAnimate();

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div className="w-full" ref={containerRef}>
      <div
        className={`${styles.aboutBanner} relative flex justify-between mb-8`}
      >
        <h2
          className={`${styles.aboutTitle} text-7xl leading-none font-black mb-5 pt-11 relative`}
        >
          We <br />
          believe in <br />
          passionate <br />
          people
        </h2>
        <Image
          src="/about-visual.png"
          alt="arrow"
          width={392}
          height={631}
          className="z-10 absolute top-0 right-0 hidden md:block"
        />
      </div>
      <div className="flex items-start gap-2 mb-12 cursor-pointer hover:gap-4 transition-all">
        <h3 className="text-1xl font-black mb-5">CAREER</h3>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="z-10"
        />
      </div>
      <div className="flex gap-14">
        <div className={styles.aboutImage}>
          <Image
            src="/about-winners.jpg"
            alt="arrow"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h3>WINNERS</h3>
        </div>
        <div className={styles.aboutImage}>
          <Image
            src="/about-philosophy.jpg"
            alt="arrow"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h3>PHILOSOPHY</h3>
        </div>
        <div className={styles.aboutImage}>
          <Image
            src="/about-history.jpg"
            alt="arrow"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h3>HISTORY</h3>
        </div>
      </div>
    </div>
  );
}
