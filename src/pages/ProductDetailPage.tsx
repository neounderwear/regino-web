import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  retailPrice: number;
  discountPrice?: number;
  variants: Array<{
    type: string;
    values: Array<{
      sku: string;
      value: string;
      stock: number;
    }>;
  }>;
}

const formatCurrency = (price: number) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);
};

const ProductDetailSkeleton = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
    <div className="mb-8 h-6 w-48 bg-gray-200 rounded"></div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
      <div>
        <div className="aspect-w-1 aspect-h-1 w-full rounded-lg bg-gray-300"></div>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-300"></div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="h-10 w-full bg-gray-300 rounded"></div>
        <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-16 w-full bg-gray-200 rounded"></div>
        <div className="h-24 w-full bg-gray-200 rounded"></div>
        <div className="h-12 w-full bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const productData = { id: docSnap.id, ...docSnap.data() } as Product;
          setProduct(productData);
          if (productData.images && productData.images.length > 0) {
            setSelectedImage(productData.images[0]);
          }
          const availableVariants = productData.variants[0]?.values.filter((v) => v.stock > 0);
          if (availableVariants?.length === 1) {
            setSelectedVariant(availableVariants[0].value);
          }
        } else {
          console.log("No such document!");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Produk tidak ditemukan.</h2>
        <Link to="/katalog" className="mt-4 inline-block text-black hover:underline">
          {" "}
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const price = product.discountPrice || product.retailPrice;
  const originalPrice = product.discountPrice ? product.retailPrice : null;

  const waNumber = "6281357365813";
  let waMessage = `Halo Regino Store, saya tertarik dengan produk ${product.name}.`;

  if (selectedVariant) {
    waMessage += `\nUkuran ${selectedVariant}`;
  }

  waMessage += "\n\nApakah masih tersedia?";

  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/katalog" className="text-gray-600 hover:text-gray-900 p-2 -ml-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="ml-2 text-xl font-bold tracking-tight text-gray-900">Kembali</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex flex-col">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 shadow-md">
              <img src={selectedImage} alt={product.name} className="h-full w-full object-cover object-center" />
            </div>
            <div className="mt-4 grid grid-cols-5 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-w-1 aspect-h-1 w-full rounded-md overflow-hidden bg-gray-100 focus:outline-none ring-2 ring-offset-2 transition-all ${selectedImage === image ? "ring-black" : "ring-transparent hover:opacity-80"}`}
                >
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="h-full w-full object-cover object-center" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-4 flex items-baseline space-x-3">
              <p className="text-3xl tracking-tight text-gray-900 font-bold">{formatCurrency(price)}</p>
              {originalPrice && <p className="text-xl text-gray-400 line-through">{formatCurrency(originalPrice)}</p>}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-semibold text-gray-900">{product.variants[0]?.type || "Varian"}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants[0]?.values.map((variant) => (
                  <button
                    key={variant.sku}
                    onClick={() => setSelectedVariant(variant.value)}
                    disabled={variant.stock === 0}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors
                      ${selectedVariant === variant.value ? "bg-black text-white border-black" : "bg-white text-gray-900 border-gray-300"}
                      ${variant.stock === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through" : "hover:bg-gray-50"}`}
                  >
                    {variant.value} ({variant.stock})
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-semibold text-gray-900">Deskripsi</h3>
              <p className="mt-2 text-base text-gray-600 whitespace-pre-wrap">{product.description}</p>
            </div>

            <a
              href={selectedVariant ? waLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => !selectedVariant && e.preventDefault()}
              className={`mt-10 w-full rounded-md px-8 py-3 text-base font-medium text-white shadow-sm transition-colors text-center
                ${!selectedVariant ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}`}
            >
              {selectedVariant ? "Tanyakan Produk via WhatsApp" : "Pilih Ukuran Terlebih Dahulu"}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
