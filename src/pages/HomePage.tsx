import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BannerSlider from "../components/BannerSlider";
import AboutUs from "../components/AboutUs";
import Brands from "../components/Brands";
import Catalog from "../components/Catalog";
import Services from "../components/Services";
import Contact from "../components/Contact";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("Beranda");

  useEffect(() => {
    const sections = document.querySelectorAll("main[id], section[id]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "";

      sections.forEach((section) => {
        const sectionEl = section as HTMLElement;
        if (sectionEl.offsetTop <= scrollPosition) {
          const sectionName = sectionEl.id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          currentSection = sectionName;
        }
      });

      setActiveSection(currentSection || "Beranda");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <Header activePage={activeSection} />
      <main>
        <Hero nextSectionId="tentang-kami" />
        <section id="banner" className="py-16 sm:py-24">
          <BannerSlider />
        </section>
        <AboutUs />
        <Brands />
        <Catalog />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
