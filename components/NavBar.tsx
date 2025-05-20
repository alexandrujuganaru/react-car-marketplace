import React from "react";
import Logo from "./logo";

const NavBar = () => {
  return (
    <header
      className="w-full px-3 md:px-0 bg-primary
    sticky top-0 align-top z-10 h-14"
      style={{ boxShadow: "1px 1px 4px #50727d66" }}
    >
      <nav className="flex items-center h-full max-w-7xl mx-auto">
        <Logo />

        <ul className="hidden lg:flex flex-1 items-center justify-center space-x-4 mx-9 text-white/80 lg space-x-6 ">
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
