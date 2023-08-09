import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((currentCounter) => currentCounter + 1);
  }

  function setToZero() {
    setCounter(0);
  }

  return (
    <h1 onClick={handleClick} onDoubleClick={setToZero}>
      {counter}
    </h1>
  );
}
