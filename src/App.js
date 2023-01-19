import { useState, useEffect } from "react";

import { Header } from "./components/Header/Header";

import { AddTodo } from "./components/AddTodo/AddTodo";

import { TodoList } from "./components/TodoList/TodoList";

import { Search } from "./components/Search/Search";

import "./App.css";

const todoList = [
  {
    id: 1,
    title: "first todo",
  },
  {
    id: 2,
    title: "second todo",
  },
  {
    id: 3,
    title: "third todo",
  },
];

export function App() {
  const [todo, setTodo] = useState(todoList);

  const [filteredTodo, setFilteredTodo] = useState([]);

  console.log("ФИЛЬТЕР", filteredTodo);

  useEffect(() => {
    setFilteredTodo(todo);
  }, [todo]);

  return (
    <div className="App">
      <Header />
      <AddTodo setTodo={setTodo} />
      <TodoList filteredTodo={filteredTodo} setFilteredTodo={setFilteredTodo} setTodo={setTodo} todo={todo} />
      <Search todo={todo} setFilteredTodo={setFilteredTodo} />
    </div>
  );
}
