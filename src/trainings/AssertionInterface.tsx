import { useState } from "react";

// TODO: 1. Buat Object Const untuk Status (PENDING, SHIPPED) gunakan 'as const'
const Status = {
    PENDING: "PENDING",
    SHIPPED: "SHIPPED",
} as const;

type StatusType = typeof Status[keyof typeof Status]

// TODO: 2. Buat Interface Order (id, customerName, status, note opsional)
interface Order {
    id: string | number;
    customerName: string;
    status: StatusType; // pakai hasil ekstraknya
    note?: string; // opsional
};

function AssertionInterface() {
  // TODO: 3. Inisialisasi useState dengan data awal
  const [order, setOrder] = useState<Order>({
    id: "ORD-001",
    customerName: "Mustafid",
    status: Status.PENDING,
  });

  // TODO: 4. Buat fungsi sederhana untuk mengubah data pesanan secara manual (Gunakan Type Assertion 'as Order' jika perlu)
  const handleUpdateDataBaru = () => {
      const dataBaru = {
        id: "ORD-002",
        customerName: "Fian",
        status: Status.SHIPPED,
        note: "Tolong diantar ke Jakarta"
      }

      setOrder(dataBaru as Order);
  };

  

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Detail Pesanan: {order.id}</h2>
      <p>
        <strong>Pelanggan: {order.customerName}</strong> {/* TODO: Tampilkan Nama */}
      </p>
      <p>
        <strong>Status: {order.status}</strong> {/* TODO: Tampilkan Status */}
      </p>

      <div
        style={{ background: "#f9f9f9", padding: "10px", borderRadius: "4px" }}
      >
        {/* TODO: Gunakan Optional Chaining (?.) untuk kurir dan resi */}
        <p>
          <strong>Note: {order?.note || "Belum ada"}</strong> {/* Tampilkan kurir / 'Belum ada' */}
        </p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button onClick={handleUpdateDataBaru}>Ganti Data Baru</button>
      </div>
    </div>
  );
}

export default AssertionInterface;
