import { NameFunc } from "./NameFunc";
import { TodoListClass } from "./TodoListClass";
import { TodoListItem } from "./TodoListItem";
import "./styles.css";

function App() {
  return (
    // <div>
    //   <h1>Todo List</h1>
    //   <TodoListClass />
    // </div>
    <div>
      <NameFunc name="Radoje" age={41} isProgrammer />
      <TodoListItem isComplete>Item 1</TodoListItem>
      <TodoListItem isComplete={false}>Item 2</TodoListItem>
    </div>
  );
}

export default App;
