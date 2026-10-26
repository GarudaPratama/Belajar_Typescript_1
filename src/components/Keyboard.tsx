const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Keyboard() {
  return (
    <section className="flex flex-wrap gap-2 w-150">
      {KEYS.map((letter, index) => {
        return (
          <button key={index} className="border p-5 font-semibold">
            {letter}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;
