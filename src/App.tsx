// import Interface from "./trainings/Interface";
// import Type from "./trainings/Type";
// import Tugas1 from "./tugas/Tugas1";
// import Enum from "./trainings/Enum";
// import Tugas2satu from "./tugas/Tugas2satu";
// import Tugas2tiga from "./tugas/Tugas2tiga";
// import Tugas2dua from "./tugas/Tugas2dua";
import { useState, useEffect } from "react";
import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "../wordList.json";

function App() {
  // Mengambil 1 kata random
  const [currentWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>(["a", "z"]);

  const incorrectLetters = selectedLetters.filter((letter) => {
    return !currentWord.includes(letter);
  });

  const addLetter = (letter: string) => {
    if (selectedLetters.includes(letter)) return;

    setSelectedLetters((prev) => [...prev, letter]);
  };

  useEffect(() => {
    const onKeyboardPress = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addLetter(key);
    }

    document.addEventListener("keypress", onKeyboardPress);

    return () => {
      document.removeEventListener("keypress", onKeyboardPress);
    }
  }, [selectedLetters]);

  return (
    <section className="flex flex-col min-h-screen justify-center items-center gap-8">
      <div>Lose Win</div>

      <HangmanDraw attempt={incorrectLetters.length} />
      <HangmanWord word={currentWord} selectedLetters={selectedLetters} />
      <Keyboard
        onKeyboardClick={addLetter}
        inactiveLetters={incorrectLetters}
        activeLetters={selectedLetters.filter((letter) => {
          return currentWord.includes(letter);
        })}
      />
    </section>
  );
}

export default App;
