// Import Modules
import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

// Import Components
function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet friend for lunch",
    "Build really cool todo app",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];

    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
    <h1>My Todo list</h1>
    {todos.map((todo, index) => (
      <TodoItem todo={todo} />
    ))}
    <TodoForm addTodo={addTodo} />
  </div>
  </div>
  );
}
export default App;
