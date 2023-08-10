import React, { useState, useEffect } from "react";

export function ChildComp() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ivan");
  useEffect(() => {
    const handleMount = console.log("HI! I am mounted!");

    return () => {
      console.log("Bye bye!");
    };
  }, []);
  useEffect(() => {
    console.log(`My name is ${name} and I am ${count} years old.`),
      [name, count];
  });
  useEffect(() => {
    document.title = name;

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);
  useEffect(() => {
    console.log("ChildComp rendered");
  });
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <span>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </span>
      <br />
      <br />
      <span>
        My name is {name} and I am {count} years old.
      </span>
    </div>
  );
}
