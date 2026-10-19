const WorkStatus = {
  PENDING: "PENDING",
  ON_PROGRESS: "ON PROGRESS",
  COMPLETED: "COMPLETED",
} as const;

const Authentication = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  EXPIRED: "EXPIRED",
} as const;

const Nationality = {
  WNI: "WNI",
  WNA: "WNA",
} as const;

const workProgress = [
  {
    id: 1,
    name: "Garuda",
    workStatus: WorkStatus.PENDING,
    AuthStatus: Authentication.LOGIN,
    nationality: Nationality.WNI,
  },
  {
    id: 2,
    name: "Fian",
    workStatus: WorkStatus.COMPLETED,
    AuthStatus: Authentication.EXPIRED,
    nationality: Nationality.WNA,
  },
  {
    id: 3,
    name: "Fikri",
    workStatus: WorkStatus.ON_PROGRESS,
    AuthStatus: Authentication.LOGOUT,
    nationality: Nationality.WNI,
  },
  {
    id: 4,
    name: "Fathi",
    workStatus: WorkStatus.COMPLETED,
    AuthStatus: Authentication.LOGIN,
    nationality: Nationality.WNI,
  },
];

console.log(workProgress);
// Kegunaan type assertion adalah agar typescript percaya kalau data nya adalah string

const salam: unknown = "Halo nama saya budi";
console.log((salam as string).length); // pengen tau panjang karakter dari sebuah string jadi harus pake as string agar typescript percaya kalau data nya adalah string

function TypeAssertion() {
  return <div>TypeAssertion</div>;
}

export default TypeAssertion;
