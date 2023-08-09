import { useState } from "react";

export function ArrayMurray() {
  const [
    murray,
    removeFirst,
    removeLetter,
    addToStart,
    addToEnd,
    clear,
    reset,
  ] = useState(["A", "B", "C"]);

  const [valueToAdd, setValuetToAdd] = useState("");
  const [valueToRemove, setValuetToRemove] = useState("");

  return (
    <div>
      <h1>{murray}</h1>
      <button onClick={() => removeFirst(([, ...rest]) => rest)}>
        Remove First
      </button>
      <button
        onClick={() => addToStart((currentMurray) => ["Z", ...currentMurray])}
      >
        Prepend
      </button>
      <button
        onClick={() => addToEnd((currentMurray) => [...currentMurray, "Z"])}
      >
        Append
      </button>
      <button onClick={() => clear(() => [])}>Clear</button>
      <button onClick={() => reset(["A", "B", "C"])}>Reset</button>
      <input
        type="text"
        value={valueToAdd}
        onChange={(e) => setValuetToAdd(e.target.value)}
      />
      <button onClick={() => (currentMurray) => [...currentMurray, valueToAdd]}>
        Add Letter
      </button>
    </div>
  );
}
