import React from "react";
import HeroBackground from "../assets/hero-background.jpg";

interface HeroProps {
  nextSectionId: string;
}

const Hero: React.FC<HeroProps> = ({ nextSectionId }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const nextSection = document.getElementById(nextSectionId);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="relative h-screen flex items-center justify-center text-white font-sans">
      <div className="absolute inset-0">
        <img src={HeroBackground} alt="Regino Store" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-transparent"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wide opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          Regino Store
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          Pilihan tepat untuk memenuhi kebutuhan pakaian dalam Anda
        </p>
        <div className="mt-8 opacity-0 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <a href={`#${nextSectionId}`} onClick={handleScroll} className="text-white border-2 border-white rounded-md px-8 py-3 text-base font-bold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center">
            Selengkapnya <span className="ml-2 font-light">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
