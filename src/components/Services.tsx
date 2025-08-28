import React from "react";
import serviceImage from "../assets/service-image.jpg";

const Services: React.FC = () => {
  return (
    <section id="pelayanan-pelanggan" className="flex flex-col lg:flex-row bg-white lg:min-h-screen">
      <div className="w-full lg:w-1/2 bg-white text-black flex flex-col justify-center order-2 lg:order-1">
        <div className="p-10 sm:p-16 lg:p-20">
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight opacity-0 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            Kami senantiasa memberikan pelayanan terbaik.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            Regino Store hadir untuk memberikan pengalaman berbelanja pakaian dalam yang nyaman, elegan, dan penuh percaya diri. Kami percaya bahwa kenyamanan dari dalam adalah kunci untuk tampil lebih percaya diri.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-80 lg:h-screen order-1 lg:order-2">
        <img src={serviceImage} alt="Pelayanan Pelanggan Regino Store" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Services;
