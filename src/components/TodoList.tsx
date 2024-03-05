import TodoItem from "./TodoItem";
import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
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
    <div className="flex max-w-xl">
      <div className="w-1/2 float-left">
        <h2 className="text-center m-2 text-lg font-bold">To Do</h2>
        {renderTodo()}
      </div>
      <div className="w-1/2 float-right">
        <h2 className="text-center m-2 text-lg font-bold">Completed</h2>
        {renderCompleted()}
      </div>
    </div>
  );
}

export default TodoList;
