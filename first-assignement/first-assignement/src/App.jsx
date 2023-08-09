import { UserCard } from "./UserCard";
import user from "./user.json";
import "./user.css";
function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </div>
  );
}

export default App;
