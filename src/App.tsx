import { useState, useEffect } from "react";
import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "../wordList.json";

function App() {
  // Mengambil 1 kata random
  const [currentWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)].toLowerCase();
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const incorrectLetters = selectedLetters.filter((letter) => {
    return !currentWord.includes(letter);
  });

  // Logika Posisi Kalah & Menang
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = currentWord
    .split("")
    .every((letter) => selectedLetters.includes(letter));

  const addLetter = (letter: string) => {
    // Jika huruf sudah ditekan atau game sudah selesai (kalah/menang), jangan lakukan apa-apa
    if (selectedLetters.includes(letter) || isLoser || isWinner) return;

    setSelectedLetters((prev) => [...prev, letter]);
  };

  useEffect(() => {
    const onKeyboardPress = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addLetter(key);
    };

    document.addEventListener("keypress", onKeyboardPress);

    return () => {
      document.removeEventListener("keypress", onKeyboardPress);
    };
  }, [selectedLetters, isLoser, isWinner]);

  return (
    <section className="flex flex-col min-h-screen justify-center items-center gap-8">
      {/* Teks Pesan Menang / Kalah */}
      <div className="text-2xl font-bold">
        {isWinner && "You win, refresh and try again!"}
        {isLoser && "Nice try, refresh and try again!"}
      </div>

      <HangmanDraw attempt={incorrectLetters.length} />
      
      <HangmanWord
        word={currentWord}
        selectedLetters={selectedLetters}
        reveal={isLoser}
        isWinner={isWinner}
      />
      
      <Keyboard
        disabled={isWinner || isLoser}
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