import StudentGrade from "./components/StudentGrade";
import Interface from "./trainings/Interface";
import Type from "./trainings/Type";
import Tugas1 from "./tugas/Tugas1";
import Enum from "./trainings/Enum";
import Tugas2satu from "./tugas/Tugas2satu";
import Tugas2tiga from "./tugas/Tugas2tiga";
import Tugas2dua from "./tugas/Tugas2dua";
function App() {
  return (
    <div>
      <StudentGrade name="Muhammad Garuda Pratama" className="XI-B" initialScore={0} status="Lulus" />
      <Interface />
      <Type />
      <Tugas1 />
      <Enum />
      <Tugas2satu />
      <Tugas2tiga />
      <Tugas2dua />
    </div>
  )
}

export default App