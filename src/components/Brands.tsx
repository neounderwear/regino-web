import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../Firebase";

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  isActive: boolean;
}

const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => (
  <div className="flex-shrink-0 mx-4 sm:mx-6 py-4">
    <div className="h-28 w-44 flex items-center justify-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
      <img className="h-16 md:h-20 w-auto object-contain transition-all duration-300 grayscale group-hover/item:grayscale-0" src={brand.logoUrl} alt={brand.name} />
    </div>
  </div>
);

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brandsCollection = collection(db, "brands");
        const q = query(brandsCollection, where("isActive", "==", true), orderBy("name", "asc"));
        const querySnapshot = await getDocs(q);
        const brandsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Brand);
        setBrands(brandsData);
      } catch (err) {
        console.error("Error fetching brands: ", err);
        setError("Gagal memuat daftar merek.");
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  const MarqueeContent: React.FC<{ brandList: Brand[] }> = ({ brandList }) => {
    if (loading) return <p className="w-full text-center text-gray-500 py-10">Memuat...</p>;
    if (error) return <p className="w-full text-center text-red-600 py-10">{error}</p>;
    if (brandList.length === 0) return null;

    const duplicated = [...brandList, ...brandList];
    return (
      <>
        {duplicated.map((brand, index) => (
          <BrandCard key={`${brand.id}-${index}`} brand={brand} />
        ))}
      </>
    );
  };

  return (
    <section id="merek" className="bg-slate-50 py-16 sm:py-24 font-poppins">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Merek-merek Ternama di Toko kami</h2>
      </div>

      <div className="mt-12 w-full overflow-hidden">
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] pl-[100%]">
          <MarqueeContent brandList={brands} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
