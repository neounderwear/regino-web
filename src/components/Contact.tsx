import React from "react";
import logo from "../assets/logo.png";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2.5" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
    <path
      fill="#010101"
      d="M41,15.3c-3.2-0.1-6.1-1.1-8.6-3c-2-1.6-3.3-3.7-3.9-6.2C28.3,5.5,28.2,5,28.1,4h-6c0,6.2,0,12.3,0,18.5
      c0,0.5,0,1.1-0.1,1.6c-0.3,2.1-1.6,3.5-3.7,3.9c-2.2,0.4-4.4-0.9-5.1-3c-0.2-0.5-0.3-1-0.3-1.6c-0.1-3,2.4-5.7,5.5-5.7
      c0.6,0,1.1,0,1.7,0.1v-6.1c-0.3,0-0.6,0-0.8,0c-2.2,0-4.3,0.6-6.2,1.8c-3.1,2-5,4.8-5.5,8.4c-0.7,4.6,0.5,8.6,3.9,11.9
      c3.1,3,6.9,4.3,11.2,3.8c4.2-0.4,7.7-2.3,10.1-6c1.7-2.7,2.4-5.7,2.4-8.9c0-2.8,0-5.6,0-8.4c2.4,1.7,5.1,2.6,8.1,2.8V15.3z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
    <radialGradient id="IGgradient" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#fd5" />
      <stop offset=".328" stopColor="#ff543e" />
      <stop offset=".348" stopColor="#fc5245" />
      <stop offset=".504" stopColor="#e64771" />
      <stop offset=".643" stopColor="#d53e91" />
      <stop offset=".761" stopColor="#cc39a4" />
      <stop offset=".841" stopColor="#c837ab" />
    </radialGradient>
    <path
      fill="url(#IGgradient)"
      d="M34,0H14C6.268,0,0,6.268,0,14v20c0,7.732,6.268,14,14,14h20c7.732,0,14-6.268,14-14V14
      C48,6.268,41.732,0,34,0z"
    />
    <path
      fill="#fff"
      d="M24,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S30.627,12,24,12z M24,31
      c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7S27.866,31,24,31z"
    />
    <circle cx="36.5" cy="11.5" r="2.5" fill="#fff" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
    <path
      fill="#1877F2"
      d="M24,0C10.745,0,0,10.745,0,24c0,11.991,8.805,21.917,20.25,23.711V30.938h-6.094V24h6.094v-5.25
      c0-6.02,3.582-9.313,9.056-9.313c2.625,0,5.375,0.469,5.375,0.469v5.906h-3.031c-2.984,0-3.906,1.852-3.906,3.75V24h6.656
      l-1.062,6.938h-5.594v16.773C39.195,45.917,48,35.991,48,24C48,10.745,37.255,0,24,0z"
    />
    <path
      fill="#fff"
      d="M33.844,30.938l1.062-6.938h-6.656v-4.438c0-1.898,0.922-3.75,3.906-3.75h3.031v-5.906
      c0,0-2.75-0.469-5.375-0.469c-5.474,0-9.056,3.293-9.056,9.313V24h-6.094v6.938h6.094v16.773c1.229,0.193,2.487,0.289,3.75,0.289
      s2.521-0.096,3.75-0.289V30.938H33.844z"
    />
  </svg>
);

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section id="kontak" className="bg-black">
        <div className="container mx-auto px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center bg-white rounded-2xl p-10 sm:p-16 shadow-2xl opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hubungi kami untuk pemesanan atau pertanyaan lebih lanjut!</h2>
            <div className="mt-10">
              <a
                href="https://api.whatsapp.com/send/?phone=6281357365813&text=Halo+Regino+Store%2C+saya+mau+tanya+soal+produknya&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                <WhatsAppIcon />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400">
        <div className="container mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <img src={logo} alt="Regino Store Logo" className="h-8 w-auto mb-4" />
              <h2 className="text-lg">Regino Store</h2>
              <p className="mt-2 text-sm leading-relaxed">
                ITC Mangga Dua Lt. 1 Blok C No. 34-36
                <br />
                Jl. Mangga Dua Raya, Kel. Ancol, Kec. Pademangan
                <br />
                Kota Adm. Jakarta Utara, 14430
              </p>
              <a
                href="https://maps.app.goo.gl/x3Ba4B51RkeXvWXA9?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 rounded-md bg-gray-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 transition-colors"
              >
                Lihat di Google Maps <span className="font-light ml-1">→</span>
              </a>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-base font-semibold text-white">Toko Online</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="https://vt.tiktok.com/ZSA54syub/?page=Mall&utm_campaign=client_share&utm_source=whatsapp&share_app_id=1180"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm hover:text-white transition-colors"
                  >
                    TikTok Shop by Tokopedia
                    <ExternalLinkIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.tokopedia.com/reginostore" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-white transition-colors">
                    Tokopedia <ExternalLinkIcon />
                  </a>
                </li>
                <li>
                  <a href="https://s.shopee.co.id/2g1FcV0kSK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-white transition-colors">
                    Shopee <ExternalLinkIcon />
                  </a>
                </li>
                <li>
                  <a href="https://s.lazada.co.id/s.ZcvUoE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-white transition-colors">
                    Lazada <ExternalLinkIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-base font-semibold text-white">Navigasi</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#beranda" className="text-sm hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#tentang-kami" className="text-sm hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#merek" className="text-sm hover:text-white transition-colors">
                    Merek
                  </a>
                </li>
                <li>
                  <a href="#katalog" className="text-sm hover:text-white transition-colors">
                    Katalog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-800" />

          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0">© {currentYear} Regino Store</p>
            <div className="flex space-x-4 order-1 sm:order-2">
              <a
                href="https://www.tiktok.com/@reginostore?_t=ZS-8zBisN2MGqW&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-white hover:text-black transition-colors"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.instagram.com/reginostore?igsh=M3VvYm1yeTR3bmRx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-white hover:text-black transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/share/19LMjw2iA4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-white hover:text-black transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
