// src/components/ProductCard.tsx

import { Link } from "react-router-dom";
import React from "react";
import { Timestamp } from "firebase/firestore";

// Definisikan tipe untuk Varian
interface VariantValue {
  sku: string;
  stock: number;
  value: string;
}

interface Variant {
  type: string;
  values: VariantValue[];
}

// Perbarui Interface Product
export interface Product {
  id: string;
  name: string;
  brandName?: string;
  images: string[];
  retailPrice: number;
  discountPrice?: number;
  createdAt: Timestamp;
  description: string;
  variants: Variant[];
}

interface ProductCardProps {
  product: Product;
}

const formatCurrency = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const price = product.discountPrice || product.retailPrice;
  const originalPrice = product.discountPrice ? product.retailPrice : null;

  return (
    <Link to={`/produk/${product.id}`} className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 font-sans">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 group-hover:opacity-80 transition-opacity sm:h-auto relative">
        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover object-center" />

        {product.brandName && <div className="absolute top-2 right-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">{product.brandName}</div>}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-gray-800 flex-grow h-10 line-clamp-2">{product.name}</h3>
        <div className="mt-2">
          <p className="text-lg font-bold text-gray-900">{formatCurrency(price)}</p>
          {originalPrice && <p className="text-xs text-gray-400 line-through">{formatCurrency(originalPrice)}</p>}
        </div>
      </div>
    </Link>
  );
};

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200"></div>
      <div className="mt-4 space-y-2 p-4 border border-t-0 rounded-b-lg">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mt-2"></div>
      </div>
    </div>
  );
};
