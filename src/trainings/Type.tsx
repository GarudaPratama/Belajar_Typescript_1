type Status = "aktif" | "nonaktif";
type Grade = "SMP" | "SMA";

type Identity = {
  id: number;
  name: string;
};

type DetailIdentity = {
  status: Status;
  grade: Grade;
};

type FullIdentity = Identity & DetailIdentity;

const student: FullIdentity = {
  id: 1,
  name: "Muhammad Garuda Pratama",
  status: "aktif",
  grade: "SMP",
};

// interface Identity = {
//   id: number;
//   name: string;
// };

// interface DetailIdentity extends Identity {
//   status: Status;
//   grade: Grade;
// };

console.log(student);

function Type() {
  return (
    <div>
      <p></p>
    </div>
  );
}

export default Type;
