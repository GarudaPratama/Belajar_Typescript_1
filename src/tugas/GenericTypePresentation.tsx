import { useState } from 'react';

// 1. Kategori Produk (menggunakan 'as const' agar aman di TS)
const ProductCategory = {
  FASHION: "Fashion",
  ELECTRONICS: "Elektronik",
} as const;

type ProductCategory = typeof ProductCategory[keyof typeof ProductCategory];

// 2. Definisi Tipe Data Product
type Product = {
  id: string;
  productName: string;
  category: ProductCategory;
  price: number;
};

function GenericTypePresentation() {
  // 3. Penerapan Generic pada React Hook (useState<Product>)
  const [product, setProduct] = useState<Product>({
    id: "P-01",
    productName: "Kemeja Polos",
    category: ProductCategory.FASHION,
    price: 150000,
  });

  // Fungsi sederhana untuk update state (membuktikan Type Safety dari Generic)
  const handleDiscount = () => {
    setProduct((prev) => ({
      ...prev,
      price: prev.price - 20000,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm max-w-sm w-full space-y-4">
        
        {/* Header Kartu */}
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {product.id} • {product.category}
          </span>
          <h2 className="text-lg font-bold text-slate-900 mt-1">
            {product.productName}
          </h2>
        </div>

        {/* Info Harga */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Harga</span>
          <span className="text-lg font-bold text-slate-900">
            Rp {product.price.toLocaleString("id-ID")}
          </span>
        </div>

        {/* Tombol aksi untuk tes setProduct */}
        <button
          onClick={handleDiscount}
          className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all duration-200"
        >
          Diskon Rp 20.000
        </button>

      </div>
    </div>
  );
}

export default GenericTypePresentation;