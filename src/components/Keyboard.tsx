import clsx from "clsx";

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
}

function Keyboard({ onKeyboardClick, inactiveLetters, activeLetters }: KeyboardProps) {
  return (
    <section className="flex flex-wrap gap-2 w-150">
      {KEYS.map((letter, index) => {
        const lowerLetter = letter.toLowerCase();
        const isInactive = inactiveLetters.includes(lowerLetter);
        const isActive = activeLetters.includes(lowerLetter);
        return (
          <button
            key={index}
            onClick={() => onKeyboardClick(lowerLetter)}
            className={clsx('border p-5 font-semibold', isInactive && 'bg-gray-300', isActive && 'bg-green-500')}
          >
            {letter}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;
