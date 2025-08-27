import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface Banner {
  id: string;
  name: string;
  photoUrl: string;
  link?: string;
  isActive: boolean;
}

const BannerSlider: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const bannersCollection = collection(db, "banners");
        const q = query(bannersCollection, where("isActive", "==", true));

        const querySnapshot = await getDocs(q);
        const bannersData = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Banner
        );

        setBanners(bannersData);
      } catch (err) {
        console.error("Error fetching banners: ", err);
        setError("Gagal memuat banner. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-100 rounded-2xl w-full max-w-6xl mx-auto py-8">
        <p className="text-gray-500">Loading Banners...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 bg-red-100 text-red-700 rounded-2xl w-full max-w-6xl mx-auto py-8">
        <p>{error}</p>
      </div>
    );
  }

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={banners.length > 1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          className="w-full h-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              {banner.link ? (
                <a href={banner.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img src={banner.photoUrl} alt={banner.name} className="w-full h-full object-cover" />
                </a>
              ) : (
                <div className="w-full h-full">
                  <img src={banner.photoUrl} alt={banner.name} className="w-full h-full object-cover" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSlider;
