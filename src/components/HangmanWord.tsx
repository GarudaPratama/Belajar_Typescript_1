interface HangmanWordProps {
  word: string
}

function HangmanWord({ word }: HangmanWordProps) {

  return (
    <section className="flex gap-5">
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className="uppercase text-6xl font-bold pb-2 border-b-5 border-black"
        >
          {letter}
        </span>
      ))}
    </section>
  );
}

export default HangmanWord;
