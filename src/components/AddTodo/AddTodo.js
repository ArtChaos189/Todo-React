import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import clases from "./AddTodo.module.css";

export function AddTodo({ setTodo }) {
  const [value, setValue] = useState("");

  const saveTodo = () => {
    setTodo((currentTodo) => [
      ...currentTodo,
      {
        id: uuidv4(),
        title: value,
      },
    ]);
    setValue("");
  };

  const onInputKeyDown = (event) => {
    if (event.key === "Enter") {
      saveTodo();
    }
  };

  return (
    <div className={clases.addTodo}>
      <input
        placeholder="Add Task..."
        value={value}
        onKeyDown={onInputKeyDown}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
