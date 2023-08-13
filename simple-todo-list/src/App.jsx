import { useEffect, useState } from "react";
import { InputForm } from "./InputForm.jsx";
import { TodoItem } from "./TodoItem";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, { title: newTitle, completed: false }]);
  }

  function titleChanged(event) {
    setNewTitle(event.target.value);
  }

  function finishTodo(index) {
    let todoToFinish = todos[index];
    todoToFinish.completed = !todoToFinish.completed;

    setTodos([...todos]);
  }

  function deleteTodo(event) {
    setTodos(todos.filter((todo, index) => index !== event));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul id="list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            title={todo.title}
            completed={todo.completed}
            checkedChanged={() => finishTodo(index)}
            deleteHandler={() => deleteTodo(index)}
          />
        ))}
      </ul>
      <InputForm
        submitHandler={addTodo}
        title={newTitle}
        valueChangedHandler={titleChanged}
      />
    </div>
  );
}

export default App;
