"use client";

import Home from "./Home/home";
import { Works } from "./Works/works";
import { useMyContext } from "./hook/useContext";
import { About } from "./About/about";
import { Contact } from "./Contact/contact";
import { Hire } from "./Hire/hire";
import { Navigate } from "./Navigate/navigate";

type RenderPageProps = {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
};

export function RenderPage({ onMenuToggle, isMenuOpen }: RenderPageProps) {
  const { activeIndex, setActiveIndex } = useMyContext();

  const renderPage = () => {
    switch (activeIndex) {
      case 0:
        return <Home />;
      case 1:
        return <Works />;
      case 2:
        return <About />;
      case 3:
        return <Contact />;
      case 4:
        return <Hire />;
      default:
        return <Home />;
    }
  };

  const handleMenu = () => {
    if (isMenuOpen) {
      onMenuToggle();
    }
    return;
  };

  return (
    <div className="w-full px-6 relative h-screen flex justify-center">
      <Navigate />
      <div onClick={handleMenu} className="w-full md:w-full lg:w-full xl:w-4/6">
        {renderPage()}
      </div>
    </div>
  );
}
