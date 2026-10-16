import StudentGrade from "./components/StudentGrade";
import Interface from "./trainings/Interface";
import Type from "./trainings/Type";
import Tugas1 from "./tugas/Tugas1";

function App() {
  return (
    <div>
      <StudentGrade name="Muhammad Garuda Pratama" className="XI-B" initialScore={0} status="Lulus" />
      <Interface />
      <Type />
      <Tugas1 />
    </div>
  )
}

export default App