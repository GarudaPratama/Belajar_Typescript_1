interface StudentTypes {
  name: string;
  age: number;
  isOsis: boolean;
  favFood: string[];
}

function Interface() {
  const student: StudentTypes = {
    name: "Muhammad Garuda Pratama",
    age: 16,
    isOsis: true,
    favFood: ["Nasi Goreng", "Mie Goreng"],
  };

  return (
    <div>
      <p>{`Halo nama saya ${student.name}, umur saya ${student.age}, saya ${student.isOsis ? "Adalah bagian dari OSIS" : "Bukan bagian dari OSIS"}, dan makanan favorit saya adalah ${student.favFood[0]} dan ${student.favFood[1]}`}</p>
    </div>
  );
}

export default Interface;
