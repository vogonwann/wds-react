import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name === "") return;

    alert(`Name ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <button type="submit">Alert Name</button>
    </form>
  );
}

export default App;
