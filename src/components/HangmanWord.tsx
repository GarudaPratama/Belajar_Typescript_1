interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
  reveal?: boolean;    // bernilai true jika posisi kalah
  isWinner?: boolean;  // bernilai true jika posisi menang
}

function HangmanWord({
  word,
  selectedLetters,
  reveal = false,
  isWinner = false,
}: HangmanWordProps) {
  return (
    <section className="flex gap-5">
      {word.split("").map((letter, index) => {
        const isGuessed = selectedLetters.includes(letter);
        const isShown = isGuessed || reveal;

        // Atur warna huruf
        let textColor = "text-black";
        if (isWinner) {
          textColor = "text-green-500"; // Menang: semua huruf warna hijau
        } else if (reveal && !isGuessed) {
          textColor = "text-red-500";   // Kalah: huruf yang di-reveal warna merah
        }

        return (
          <span
            key={index}
            className="uppercase text-6xl font-bold pb-2 border-b-5 border-black"
          >
            <span
              className={`${isShown ? "visible" : "invisible"} ${textColor}`}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;