"use client";
import Image from "next/image";
import { useMyContext } from "../hook/useContext";

type HeaderProps = {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
};

export function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  const { activeIndex } = useMyContext();
  return (
    <header
      className={`header flex w-full py-6 px-6 justify-between ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <a href="#" className="flex items-center gap-4 z-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={28}
          height={30}
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="text-1xl">GLOBAL</h1>
      </a>
      {activeIndex === 1 || activeIndex === 2 || activeIndex === 3 ? (
        <button className="bg-blue-600 w-24 z-10">
          <p className="relative z-10 text-xl text-center">Hire Us</p>
        </button>
      ) : null}
      <button onClick={onMenuToggle} className="w-24 flex flex-col items-end">
        <div className={`w-6 h-0.5 bg-white mb-1 rounded `}></div>
        <div className={`w-6 h-0.5 bg-white mb-1 rounded `}></div>
        <div className={`w-6 h-0.5 bg-white mb-1 rounded `}></div>
      </button>
    </header>
  );
}
