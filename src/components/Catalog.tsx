import React from "react";
import catalogImage from "../assets/catalog-image.jpg";

const Catalog: React.FC = () => {
  return (
    <section id="katalog" className="flex flex-col lg:flex-row lg:min-h-screen font-sans">
      <div className="w-full lg:w-1/2 h-80 lg:h-screen">
        <img src={catalogImage} alt="Katalog Produk Regino Store" className="w-full h-full object-cover" />
      </div>

      <div className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center">
        <div className="p-10 sm:p-16 lg:p-20">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Telusuri berbagai macam produk di Katalog Toko kami
          </h2>

          <div className="mt-10 opacity-0 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <a href="/katalog" className="text-white border-2 border-white rounded-md px-8 py-3 text-base font-bold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center">
              Selengkapnya <span className="ml-2 font-light">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
