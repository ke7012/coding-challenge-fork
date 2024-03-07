import { render } from "react-dom";
import TodoItem from "./TodoItem";
import React, { useState } from "react";

/**
 * Component that displays two separate lists: open tasks and completed tasks.
 */

/* Represents a Todo Item*/
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

/* Props for the TodoList Component*/
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  /* Keeps state of current Filter */
  const [filter, setFilter] = useState("");

  /* Renders the open tasks */
  const renderTodo = () => {
    const todoList: Todo[] = todos.filter((todo) => !todo.completed);
    if (todoList.length === 0) {
      return (
        <div className="p-2 text-gray-300 text-opacity-50 text-center text-xs ">
          No To Do Tasks
        </div>
      );
    } else {
      return (
        <>
          {todoList.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </>
      );
    }
  };

  /* Renders the completed tasks */
  const renderCompleted = () => {
    const completedList: Todo[] = todos.filter((todo) => todo.completed);
    if (completedList.length === 0) {
      return (
        <div className="p-2 text-gray-300 text-opacity-50 text-center text-xs">
          No Completed Tasks
        </div>
      );
    } else {
      return (
        <>
          {completedList.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </>
      );
    }
  };

  /* Returns completed and todo lists */
  const renderAll = () => {
    return (
      <div className="grid gap-2 grid-cols-2 min-w-[600px]">
        <div className="todoContainer items-stretch">
          <h2 className="text-center text-lg font-bold">To Do</h2>
          {renderTodo()}
        </div>
        <div className="completedContainer items-stretch">
          <h2 className="text-center text-lg font-bold">Completed</h2>
          {renderCompleted()}
        </div>{" "}
      </div>
    );
  };

  /* Displays open, completed and all todo items based on filter */
  const filterTodo = () => {
    switch (filter) {
      case "all":
        return renderAll();
      case "completed":
        return (
          <>
            <h2 className="text-center m-2 text-lg font-bold">Completed</h2>
            {renderCompleted()}
          </>
        );
      case "open":
        return (
          <>
            <h2 className="text-center m-2 text-lg font-bold">To Do</h2>
            {renderTodo()}
          </>
        );
      default:
        return renderAll();
    }
  };

  /* Changes filter based on toggle bar */
  const changeFilter = (kekw: string) => {
    setFilter(kekw);
  };

  return (
    <>
      <div className="flex justify-center items-center p-2">
        <div className="flex justify-around items-center rounded-lg p-2 mb-4 w-[76%] h-10 bg-[#3b3b3b]">
          <span
            className={`px-4 py-0.5 rounded-lg ${
              filter === "all" ? "bg-mono-blue font-semibold" : ""
            } cursor-pointer transition-[1s] hover:font-semibold `}
            onClick={() => changeFilter("all")}
          >
            All
          </span>

          <span
            className={`px-4 py-0.5 rounded-lg ${
              filter === "open" ? "bg-mono-blue font-semibold" : ""
            } cursor-pointer transition-[1s] hover:font-semibold `}
            onClick={() => changeFilter("open")}
          >
            Open
          </span>
          <span
            className={`px-4 py-0.5 rounded-lg ${
              filter === "completed" ? "bg-mono-blue font-semibold" : ""
            } cursor-pointer transition-[1s] hover:font-semibold `}
            onClick={() => changeFilter("completed")}
          >
            Completed
          </span>
        </div>
      </div>
      {/* Used a dropdown Menu before but I think the above one looks better */}
      {/* <div className="flex justify-center items-center p-2 m-2">
        <label htmlFor="filter">Show </label>
        <select
          className="rounded-lg ml-2 p-2 lg"
          value={filter}
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="completed">Completed</option>
        </select>
      </div> */}
      {filterTodo()}
    </>
  );
}

export default TodoList;
