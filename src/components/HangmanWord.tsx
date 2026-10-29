interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
}

function HangmanWord({ word, selectedLetters }: HangmanWordProps) {
  return (
    <section className="flex gap-5">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className="uppercase text-6xl font-bold pb-2 border-b-5 border-black"
        >
          <span
            className={
              selectedLetters.includes(letter) ? "visible" : "invisible"
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </section>
  );
}

export default HangmanWord;
