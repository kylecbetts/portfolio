"use client";

import React, { useState } from "react";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavButton from "./NavButton";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-10 backdrop-blur-md">
      <div className="container mx-auto py-2 px-4">
        <nav className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <NavLogo />
            <ul className="hidden md:flex md:gap-6">
              <NavLinks />
            </ul>
            <NavButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          {isMenuOpen ? (
            <ul className="flex flex-col gap-4 text-right pb-2 md:hidden">
              <NavLinks onClick={toggleMenu} />
            </ul>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
