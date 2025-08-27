import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const navItems = ["Beranda", "Tentang Kami", "Merek", "Katalog", "Pelayanan Pelanggan", "Kontak"];

interface HeaderProps {
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg py-4" : "py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#beranda" className="h-8">
          <img src={logo} alt="Regino Store Logo" className="h-full w-auto" />
        </a>

        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            const isActive = activePage.toLowerCase() === item.toLowerCase();
            return (
              <a key={item} href={`#${id}`} className={`text-white hover:text-gray-300 transition-colors text-sm font-medium relative ${isActive ? "font-bold" : ""}`}>
                {item}
                {isActive && <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-white"></span>}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center">
          <a
            href="https://api.whatsapp.com/send/?phone=6281357365813&text=Halo+Regino+Store%2C+saya+mau+tanya+soal+produknya&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-white border border-white rounded-md px-5 py-2 text-sm font-bold hover:bg-white hover:text-black transition-all"
          >
            Hubungi kami
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden ml-4 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0 overflow-hidden"}`}>
        <nav className="mt-4 px-6 pb-6 bg-black flex flex-col space-y-4">
          {navItems.map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
            return (
              <a key={item} href={`#${id}`} className="text-white hover:text-gray-300">
                {item}
              </a>
            );
          })}
          <a href="#" className="text-white border border-white rounded-md px-5 py-2 text-sm font-bold text-center mt-2">
            Hubungi kami
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
