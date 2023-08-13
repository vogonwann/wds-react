export function TodoItem({ title, completed, deleteHandler, checkedChanged }) {
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input
            type="checkbox"
            data-list-item-checkbox
            checked={completed}
            onChange={checkedChanged}
          />
          <span data-list-item-text>{title}</span>
        </label>
        <button data-button-delete onClick={deleteHandler}>
          Delete
        </button>
      </li>
    </>
  );
}
