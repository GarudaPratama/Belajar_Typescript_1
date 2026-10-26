// import Interface from "./trainings/Interface";
// import Type from "./trainings/Type";
// import Tugas1 from "./tugas/Tugas1";
// import Enum from "./trainings/Enum";
// import Tugas2satu from "./tugas/Tugas2satu";
// import Tugas2tiga from "./tugas/Tugas2tiga";
// import Tugas2dua from "./tugas/Tugas2dua";
import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center gap-8">
      <div>Lose Win</div>

      <HangmanDraw />
      <HangmanWord />
      <Keyboard />
    </section>
  )
}

export default App