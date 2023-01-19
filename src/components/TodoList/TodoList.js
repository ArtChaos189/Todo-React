import clases from "./TodoList.module.css";

export function TodoList({ filteredTodo, setFilteredTodo, setTodo, todo }) {
  function deleteTodo(id) {
    const filter = filteredTodo.filter((todo) => todo.id !== id);
    const editTodo = todo.filter((todo) => todo.id !== id);
    setFilteredTodo(filter);
    setTodo(editTodo);
  }

  return (
    <div>
      {filteredTodo.map((todo) => (
        <div className={clases.menu} key={todo.id}>
          <div className={clases.title}>{todo.title}</div>
          <button onClick={() => deleteTodo(todo.id)}></button>
        </div>
      ))}
    </div>
  );
}
