import { useState } from "react";

// TODO: 1. Buat enums untuk Kategori Produk (ELECTRONICS, FASHION, FOOD)
// gunakan 'as const'
const ProductCategory = {
    ELECTRONICS: "ELECTRONICS",
    FASHION: "FASHION",
    FOOD: "FOOD",
} as const;

// TODO: Ekstrak tipe dari ProductCategory menggunakan typeof dan keyof ;
type ProductCategoryType = typeof ProductCategory[keyof typeof ProductCategory];

// TODO: 2. Buat Interface Product
// id (str or int), productName, category, price, discount opsional)
interface Product {
    id: string | number;
    productName: string;
    category: ProductCategoryType;
    price: number;
    discount?: number;
}

function Tugas2tiga() {
  // TODO: 3. Inisialisasi useState dengan data awal
  // (id: 'P-01', productName: 'Kemeja Polos', category: 'FASHION', price: 150000)
  const [product, setProduct] = useState<Product>({
    id: "P-01",
    productName: "Kemeja Polos",
    category: ProductCategory.FASHION,
    price: 150000,
  });

  // TODO: 4. Buat fungsi untuk mengganti data produk dengan barang baru
  const handleRestockNewProduct = () => {
    const barangBaru = {
      id: 99,
      productName: "Mechanical Keyboard Wireless",
      category: ProductCategory.ELECTRONICS, // ganti pakai dari enum
      price: 750000,
      discount: 10,
    };

    // Tulis setProduct dengan Type Assertion di sini
    setProduct(barangBaru as Product);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        border: "2px dashed #4f46e5",
        borderRadius: "12px",
        maxWidth: "420px",
      }}
    >
      {/* TODO: Tampilkan ID Produk */}
      <span style={{ fontSize: "12px", color: "#6b7280" }}>SKU: {product.id}</span>

      {/* TODO: Tampilkan Nama Produk */}
      <h3 style={{ margin: "5px 0" }}>{product.productName}</h3>

      <p style={{ margin: "5px 0" }}>
        {/* TODO: Tampilkan Kategori */}
        <strong>Kategori: {product.category}</strong>
      </p>

      <p style={{ margin: "5px 0" }}>
        {/* TODO: Tampilkan Harga */}
        <strong>Harga:</strong> Rp{product.price}
      </p>

      <div
        style={{
          background: "#fef3c7",
          padding: "10px",
          borderRadius: "6px",
          marginTop: "12px",
        }}
      >
        <p style={{ margin: "4px 0" }}>
          <strong>Diskon:</strong>{" "}
          {/* Tampilkan data discount atau fallback 'Tidak ada diskon' */}
          {product.discount || "Tidak ada diskon"}
        </p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={handleRestockNewProduct}
          style={{
            padding: "8px 14px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Muat Produk Baru
        </button>
      </div>
    </div>
  );
}

export default Tugas2tiga;
