export function InputForm({ title, submitHandler, valueChangedHandler }) {
  return (
    <>
      <form onSubmit={submitHandler} id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={title}
          onChange={valueChangedHandler}
        />
        <button>Add Todo</button>
      </form>
    </>
  );
}
