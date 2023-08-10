import { useState, useEffect } from "react";
import { ChildComp } from "./ChildComp.jsx";

function App() {
  // useEffect(() => {
  //   console.log("Count changed ", count), [count];
  // });
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <ChildComp></ChildComp>}
    </div>
  );
}

export default App;
