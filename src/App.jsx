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

  /* Function to set the completed status of a Todoitem */
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /* Function to delete a Todoitem */
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  /* Funciton to add a TodoItem to the list of TodoItems */
  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  /* Pass functions to the TodoList and AddTodo Component */
  return (
    <div>
      <Title Title={"Mono Task"}/>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
