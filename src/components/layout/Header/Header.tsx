"use client";
import Logo from "@components/common/Logo";
import Burger from "./Burger";

const Header = () => {
  return (
    <header className="items-center justify-between hidden px-4 sm:flex">
      <Logo />
      <Burger />
    </header>
  );
};

export default Header;
