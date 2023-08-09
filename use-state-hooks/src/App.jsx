import { useState } from "react";
import { Counter } from "./Counter.jsx";
import { ArrayMurray } from "./ArrayMurray.jsx";

function App() {
  // const [name, setName] = useState("Ivan");
  // const [age, setAge] = useState(41);

  // function handleClick() {
  //   setName("Brian");

  //   setAge((currentAge) => {
  //     return currentAge + 1;
  //   });

  //   setAge(age + 1);
  // }
  return (
    // <h1 onClick={handleClick}>
    //   Hi {name} {age}
    // </h1>
    // <Counter />
    // <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <ArrayMurray />
  );
}

export default App;
