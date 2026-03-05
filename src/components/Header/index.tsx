"use client";
import Image from "next/image";
import LanguageSelector from "../LanguageSelector";

const Header = () => {
  return (
    <header className="flex items-center">
      <Image
        src="/testing.png"
        alt="testing"
        height={150}
        width={150}
        priority
      />
      <LanguageSelector />
    </header>
  );
};

export default Header;
