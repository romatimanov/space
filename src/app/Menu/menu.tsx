"use client";

import { useMyContext } from "../hook/useContext";
import { useAnimateMenu } from "../hook/animate/useAnimateMenu";
import styles from "./menu.module.css";

type MenuProps = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
};

export function Menu({ isMenuOpen, onMenuToggle }: MenuProps) {
  const { activeIndex, setActiveIndex } = useMyContext();

  const handleActive = (index: number) => {
    if (activeIndex === index) return;
    onMenuToggle();
    setActiveIndex(index);
  };

  useAnimateMenu({ isMenuOpen, style: "nav" });

  return (
    <nav className={`flex flex-col items-center ${"nav"}`}>
      <ul>
        <li
          className={`relative mb-8 w-72 text-center cursor-pointer ${
            activeIndex === 0 ? styles.itemActive : ""
          }`}
          onClick={() => {
            handleActive(0);
          }}
        >
          <p className="relative z-10 text-7xl font-blac">Home</p>
        </li>
        <li
          className={`relative mb-8 text-center cursor-pointer ${
            activeIndex === 1 ? styles.itemActive : ""
          }`}
          onClick={() => handleActive(1)}
        >
          <p className="relative z-10 text-7xl font-blac">Works</p>
        </li>
        <li
          className={`relative mb-8 text-center cursor-pointer ${
            activeIndex === 2 ? styles.itemActive : ""
          }`}
          onClick={() => handleActive(2)}
        >
          <p className="relative z-10 text-7xl font-blac">About</p>
        </li>
        <li
          className={`relative mb-8 text-center cursor-pointer ${
            activeIndex === 3 ? styles.itemActive : ""
          }`}
          onClick={() => handleActive(3)}
        >
          <p className="relative z-10 text-7xl font-blac">Contact</p>
        </li>
        <li
          className={`relative mb-8 text-center cursor-pointer ${
            activeIndex === 4 ? styles.itemActive : ""
          }`}
          onClick={() => handleActive(4)}
        >
          <p className="relative z-10 text-7xl font-blac">Hire us</p>
        </li>
      </ul>
    </nav>
  );
}
