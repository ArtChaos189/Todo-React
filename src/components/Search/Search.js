import "./Search.css";

export function Search({ todo, setFilteredTodo }) {
  const onInputChange = (event) => {
    const inputValue = event.currentTarget.value;
    const filteredTodo = todo.filter((todo) => todo.title.toLowerCase().includes(inputValue.toLowerCase()));

    setFilteredTodo(filteredTodo);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Search.." onChange={onInputChange} />
      <div />
    </div>
  );
}
