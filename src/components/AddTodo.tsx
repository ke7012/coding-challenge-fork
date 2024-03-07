import React from "react";
import { useState } from "react";

/**
 *  Component for adding new todo tasks.
 *  Allows to input a task, submit the task and add it to the list of todos.
 */

interface AddTodoProps {
  addTodo: (input: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
  /* State to store the input value */
  const [input, setInput] = useState("");

  /* Function to handle input change */
  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  /* Function to handle form submission */
  const handleSubmit = (event: any) => {
    event.preventDefault(); // Stops Refreshing the Page
    if (input.length === 0) return; // Do nothing for empty input
    addTodo(input); // Add todo task using addTodo function
    setInput(""); // Clear input
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" p-2 m-2 max-w-sm">
        <input
          type="text"
          placeholder="Enter a To Do task"
          className="rounded-lg p-2"
          value={input}
          onChange={handleChange}
        />
        <button className="rounded-lg p-2" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
