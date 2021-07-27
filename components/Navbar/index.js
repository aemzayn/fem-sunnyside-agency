import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  function toggleNav() {
    setOpen((open) => !open);
  }

  return (
    <nav className="absolute inset-x-0 top-0 mx-auto px-5 pt-6 md:p-10 z-10">
      <div className="flex w-full justify-between items-center text-white font-bold">
        <img src="/images/logo.svg" className="h-6" alt="logo" />
        <div className="hidden md:flex gap-12 md:text-right items-center text-2xl md:text-xl font-medium">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <button className="px-5 py-3 rounded-full bg-white hover:bg-blue-300 text-black hover:text-white uppercase duration-100 text-lg font-bold">
            Contact
          </button>
        </div>

        {/* Mobile */}
        <button
          id="hamburger-menu"
          className="block md:hidden"
          onClick={toggleNav}
        >
          <img src="/images/icon-hamburger.svg" role="presentation" />
        </button>

        {open && (
          <div className="mobile-nav md:hidden absolute inset-x-0 w-[90%] mx-auto top-20 bg-white flex flex-col items-center text-center gap-10 pt-20 pb-10 text-xl text-gray-400">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <button className="px-6 py-4 rounded-full bg-primary-yellow hover:bg-blue-300 text-black  uppercase duration-100 text-xl">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
