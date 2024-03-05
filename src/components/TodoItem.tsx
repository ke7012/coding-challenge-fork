import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };

  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  const markUnmark = () => {
    if (todo.completed) {
      return (
        <TiDeleteOutline
          className="scale-150 cursor-pointer"
          onClick={() => toggleTodo(todo.id)}
        />
      );
    } else {
      return (
        <FaRegCircleCheck
          className="scale-125 cursor-pointer"
          onClick={() => toggleTodo(todo.id)}
        />
      );
    }
  };

  return (
    <div
      className={`m-2 p-2 break-words rounded-lg max-w-full ${
        todo.completed ? "line-through bg-correct-green" : " bg-wrong-red"
      }`}
    >
      <p className="font-light mx-2">{todo.text}</p>
      <div className="flex p-2 justify-between">
        <MdDelete
          className="hover:bg-opacity-10 scale-125 cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        />
        {markUnmark()}
      </div>
    </div>
  );
};

export default TodoItem;
