import { useState } from "react";

interface AddTodoProps {
  addTodo: (input: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [input, setInput] = useState("");
  // const [searchWord, setSearchWord] = useState("");

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Stops Refreshing the Page
    if (input.length === 0) return;
    addTodo(input);
    setInput("");
  };

  // const handleSearch = (event: any) => {
  //   setSearchWord(event.target.value);
  // };

  // const handleSearchSubmit = (e: any) => {
  //   e.preventDefault(); // Stops Refreshing the Page¨
  //   console.log(`Searched for ${e.target.value}`);
  //   setSearchWord("");
  // };

  // const filteredTodo = todos.filter((todo) =>
  //   todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  // );

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
};

export default AddTodo;
