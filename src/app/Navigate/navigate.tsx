"use client";
import { useEffect, useRef } from "react";
import styles from "../App.module.css";
import gsap from "gsap";
import throttle from "lodash/throttle";
import { useMyContext } from "../hook/useContext";

export function Navigate() {
  const { activeIndex, setActiveIndex } = useMyContext();
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const ref = useRef<(HTMLElement | null)[]>([]);
  const isAnimating = useRef<boolean>(false);

  const handleActive = (index: number) => {
    if (activeIndex === index || isAnimating.current) return;

    isAnimating.current = true;

    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          isAnimating.current = false;
        }, 500);
      },
    });

    setActiveIndex(index);
    setActiveIndex(index);

    if (ref.current[index]) {
      timeline.to(
        ref.current[index],
        { duration: 0, visibility: "hidden" },
        "<0"
      );
    }

    if (refs.current[index]) {
      timeline
        .to(
          refs.current[index],
          { duration: 0, opacity: 0, visibility: "hidden" },
          "<0"
        )
        .to(refs.current[index], { duration: 0, visibility: "visible" })
        .to(refs.current[index], { duration: 0.3, opacity: 1 }, "<+=0.3");
    }
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isAnimating.current) return;

      const direction = window.scrollY > 0 ? 1 : -1;

      if (direction === 1) {
        if (activeIndex < refs.current.length - 1) {
          handleActive(activeIndex + 1);
        } else {
          handleActive(0);
        }
      } else if (direction === -1) {
        if (activeIndex > 0) {
          handleActive(activeIndex - 1);
        } else {
          handleActive(refs.current.length - 1);
        }
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <nav className={`${styles.nav} hidden md:hidden lg:hidden xl:block `}>
      <ul className={styles.navList}>
        <li
          className={`${styles.item + " pt-5"} ${
            activeIndex === 0 ? styles.itemIsActive : ""
          }`}
          onClick={() => handleActive(0)}
        >
          <div
            className={`${styles.item} ${
              activeIndex === 0
                ? styles.item0 + " text-white"
                : " text-zinc-500"
            }`}
          >
            <span
              ref={(el) => {
                refs.current[0] = el;
              }}
            >
              {activeIndex === 0 ? "Home" : "01"}
            </span>
          </div>
        </li>
        <li
          className={`${styles.item} ${
            activeIndex === 1 ? styles.itemIsActive : ""
          }`}
          onClick={() => handleActive(1)}
        >
          <div
            className={`${styles.item} ${
              activeIndex === 1
                ? styles.item1 + " text-white"
                : " text-zinc-500"
            }`}
          >
            <span
              ref={(el) => {
                refs.current[1] = el;
              }}
            >
              {activeIndex === 1 ? "About" : "02"}
            </span>
          </div>
        </li>
        <li
          className={`${styles.item} ${
            activeIndex === 2 ? styles.itemIsActive : ""
          }`}
          onClick={() => handleActive(2)}
        >
          <div
            className={`${styles.item} ${
              activeIndex === 2
                ? styles.item2 + " text-white"
                : " text-zinc-500"
            }`}
          >
            <span
              ref={(el) => {
                refs.current[2] = el;
              }}
            >
              {activeIndex === 2 ? "Works" : "03"}
            </span>
          </div>
        </li>
        <li
          className={`${styles.item} ${
            activeIndex === 3 ? styles.itemIsActive : ""
          }`}
          onClick={() => handleActive(3)}
        >
          <div
            className={`${styles.item} ${
              activeIndex === 3
                ? styles.item3 + " text-white"
                : " text-zinc-500"
            }`}
          >
            <span
              ref={(el) => {
                refs.current[3] = el;
              }}
            >
              {activeIndex === 3 ? "Contact" : "04"}
            </span>
          </div>
        </li>
        <li
          className={`${styles.item + " pb-5"} ${
            activeIndex === 4 ? styles.itemIsActive : ""
          }`}
          onClick={() => handleActive(4)}
        >
          <div
            className={`${styles.item} ${
              activeIndex === 4
                ? styles.item4 + " text-white"
                : " text-zinc-500"
            }`}
          >
            <span
              ref={(el) => {
                refs.current[4] = el;
              }}
            >
              {activeIndex === 4 ? "Hire us" : "05"}
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
