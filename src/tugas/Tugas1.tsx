// Tugas 1

type KategoriBuku = "Fiksi" | "Non-Fiksi" | "Edukasi";

interface Book {
    judul: string;
    penulis: string;
    tahunTerbit: number;
};

interface FavBook extends Book {
    kategori: KategoriBuku
}

const favoriteBook: FavBook = {
    judul: "Drama Queen",
    penulis: "Kuraku Ichikawa",
    tahunTerbit: 2024,
    kategori: "Fiksi"
}

console.log(favoriteBook);

// Tugas 2

interface Kendaraan {
  brand: string;
  wheel: number;
}

interface Car extends Kendaraan {
  door: number;
  isElectric: boolean;
}

const car: Car = {
  brand: "Wuling",
  wheel: 4,
  door: 4,
  isElectric: true
}

console.log(car);

// Tugas 3

type Address = {
  street: string;
  city: string;
};

type Contact = {
  email: string;
  phone: string;
};

type FullProfile = Address & Contact;

const profile: FullProfile = {
  street: "Jl. Jend. Sudirman",
  city: "Jakarta",
  email: "1xO3Z@example.com",
  phone: "08123456789",
};

console.log(profile);

function Tugas1() {
  return (
    <div>Tugas1</div>
  )
}

export default Tugas1
