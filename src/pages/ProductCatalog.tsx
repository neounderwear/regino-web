import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";
import { type Product, ProductCard, ProductCardSkeleton } from "../components/ProductCard";

interface FilterControlsProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
  productCount: number;
}

const FilterControls: React.FC<FilterControlsProps> = ({ searchTerm, setSearchTerm, sortOption, setSortOption, productCount }) => (
  <div className="space-y-8">
    <div>
      <label htmlFor="search" className="block text-sm font-semibold text-gray-800 mb-2">
        Cari Produk
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          id="search"
          placeholder="Nama produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full rounded-lg border-gray-300 pl-10 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label htmlFor="sort" className="block text-sm font-semibold text-gray-800 mb-2">
        Urutkan
      </label>
      <div className="relative">
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="block w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        >
          <option value="newest">Terbaru</option>
          <option value="price-asc">Harga Terendah</option>
          <option value="price-desc">Harga Tertinggi</option>
          <option value="name-asc">Nama A-Z</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-200 pt-4">
      <p className="text-sm text-gray-600">{productCount} produk ditemukan</p>
    </div>
  </div>
);

const KatalogProduk: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const q = query(productsCollection, where("status", "==", "active"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Product);
        setAllProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...allProducts];
    if (searchTerm) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    switch (sortOption) {
      case "price-asc":
        filtered.sort((a, b) => (a.discountPrice || a.retailPrice) - (b.discountPrice || b.retailPrice));
        break;
      case "price-desc":
        filtered.sort((a, b) => (b.discountPrice || b.retailPrice) - (a.discountPrice || a.retailPrice));
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
        break;
    }
    setDisplayedProducts(filtered);
  }, [searchTerm, sortOption, allProducts]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 p-2 -ml-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="ml-2 text-xl font-bold tracking-tight text-gray-900">Katalog Produk</h1>
          </div>
          <button onClick={() => setIsFilterOpen(true)} className="lg:hidden rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 flex items-center shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 12.414V17a1 1 0 01-1.447.894l-2-1A1 1 0 018 16v-3.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
            Filter
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          <aside className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}></aside>
          {isFilterOpen && <div onClick={() => setIsFilterOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden" />}

          <aside className="hidden lg:block w-1/4 xl:w-1/5">
            <div className="sticky top-28 bg-white p-6 rounded-xl border border-gray-200">
              <h2 className="text-lg font-bold mb-6">Filter & Urutkan</h2>
              <FilterControls searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortOption={sortOption} setSortOption={setSortOption} productCount={displayedProducts.length} />
            </div>
          </aside>

          <main className="w-full lg:w-3/4 xl:w-4/5">
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            ) : displayedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 col-span-full bg-white rounded-xl border border-gray-200">{}</div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default KatalogProduk;
