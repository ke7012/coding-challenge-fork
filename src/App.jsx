import React, { useState } from "react";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

// interface Todo{
//   id: number;
//   text: string;
//   completed: boolean;
// }

function App(){
  const [todos, setTodos] = useState([]);

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  return (
    <div>
      <Title Title={"To Do List"}/>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
