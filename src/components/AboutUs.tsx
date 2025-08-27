import React from "react";
import aboutImage from "../assets/about-us-image.jpg";

const AboutUs: React.FC = () => {
  return (
    <section id="tentang-kami" className="flex flex-col lg:flex-row bg-white lg:min-h-screen">
      <div className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center order-2 lg:order-1">
        <div className="p-10 sm:p-16 lg:p-20">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Tentang Regino Store
          </h2>
          <p className="mt-6 text-justify text-base sm:text-lg text-gray-300 leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            Regino Store adalah toko underwear multibrand yang menghadirkan kenyamanan, gaya, dan kualitas untuk semua kalangan — pria, wanita, dewasa, hingga anak-anak. Kami percaya, pakaian dalam bukan hanya kebutuhan sehari-hari, tetapi
            juga kunci rasa percaya diri. Karena itu, setiap produk yang kami hadirkan dipilih secara teliti: nyaman dipakai, berbahan berkualitas, dan tetap mengikuti tren.
          </p>
          <p className="mt-4 text-justify text-base sm:text-lg text-gray-300 leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            Dengan pilihan model, ukuran, dan material yang ramah kulit, Regino Store menjadi solusi lengkap untuk kebutuhan underwear keluarga Anda. Belanja pun jadi lebih mudah, aman, dan praktis — cukup satu klik, berbagai underwear
            original dan terpercaya siap sampai ke rumah Anda.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-80 lg:h-auto order-1 lg:order-2">
        <img src={aboutImage} alt="Tentang Regino Store" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default AboutUs;
