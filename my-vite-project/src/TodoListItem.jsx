export function TodoListItem({ isComplete = false, children }) {
  return (
    <div>
      <input type="checkbox" checked={isComplete} />
      <span>{children}</span>
    </div>
  );
}
