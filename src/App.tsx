// src/App.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KatalogProduk from "./pages/ProductCatalog";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/katalog" element={<KatalogProduk />} />
      <Route path="/produk/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
