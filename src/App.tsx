import StudentGrade from "./components/StudentGrade";
import Interface from "./trainings/Interface";
import Type from "./trainings/Type";
import Tugas1 from "./tugas/Tugas1";
import Enum from "./trainings/Enum";

function App() {
  return (
    <div>
      <StudentGrade name="Muhammad Garuda Pratama" className="XI-B" initialScore={0} status="Lulus" />
      <Interface />
      <Type />
      <Tugas1 />
      <Enum />
    </div>
  )
}

export default App