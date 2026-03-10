"use client";

import { useState } from "react";
import { RenderPage } from "./renderPage";
import { MyContextProvider } from "./contextProvider";
import { Menu } from "./Menu/menu";
import { useAnimateMain } from "./hook/animate/useAnimateMain";
import { Header } from "./Header/header";

export default function Main() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useAnimateMain({
    isMenuOpen,
    content: "main-content__active",
    shrink: "main-shrink__active",
  });

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MyContextProvider>
      <main className={`container mx-auto h-screen main-shrink__active`}>
        <div className={`flex flex-col items-center main-content__active`}>
          <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
          <RenderPage onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
        </div>
        <Menu isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      </main>
    </MyContextProvider>
  );
}
