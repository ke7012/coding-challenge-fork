import TodoItem from "./TodoItem";
import React from "react";

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
  /* Renders the open tasks */
  const renderTodo = () => {
    const todoList: Todo[] = todos.filter((todo) => !todo.completed);
    if (todoList.length === 0) {
      return (
        <div className="text-gray-300 text-opacity-50 text-center text-xs ">
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
        <div className="text-gray-300 text-opacity-50 text-center text-xs">
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

  return (
    <div className="grid grid-cols-2 max-w-[500px]">
      <div className="todoContainer">
        <h2 className="text-center m-2 text-lg font-bold">To Do</h2>
        {renderTodo()}
      </div>
      <div className="completedContainer">
        <h2 className="text-center m-2 text-lg font-bold">Completed</h2>
        {renderCompleted()}
      </div>
    </div>
  );
}

export default TodoList;
