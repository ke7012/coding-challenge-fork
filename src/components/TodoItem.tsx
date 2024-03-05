import { MdDelete } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import React from "react";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };

  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <div
      className={`m-3 p-2 break-words rounded-lg ${
        todo.completed ? "line-through bg-correct-green" : " bg-wrong-red"
      }`}
    >
      <p className="font-light ">{todo.text}</p>
      <div className="flex p-2 flex-row-reverse">
        <MdDelete
          className="mx-1 scale-125 cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        />
        <FaRegCircleCheck
          className="mx-1 scale-125 cursor-pointer"
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
