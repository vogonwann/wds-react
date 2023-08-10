import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => setloading(false));
  }, []);

  let jsx;
  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else {
    jsx = (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>User List</h1>
      {jsx}
    </div>
  );
}

export default App;
