import { React, useState } from "react";
import { v4 } from "uuid";
const TodoForm = ({ addTodo, setFirstLoad }) => {
  const handleDownKey = (e) => {
    if (e.key === 'Enter') {
      if (value) {
        let todo = {
          id: v4(),
          title: value,
          completed: false,
        };
        setFirstLoad(false);
        addTodo(todo);
        setValue("");
      }
      else console.log('key', e.key, 'pressed');
    }
  }
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleAddTodo = () => {
    if (value) {
      let todo = {
        id: v4(),
        title: value,
        completed: false,
      };
      setFirstLoad(false);
      addTodo(todo);
      setValue("");
    }
  };
  return (
    <div className="mb-4">
      <div className="item mb-4 flex cursor-default justify-center text-5xl font-bold text-blue-500">
        Todo List
      </div>
      <div className="addFields flex justify-center px-4 max-[400px]:flex-wrap">
        <input
          tabIndex={0}
          onKeyDown={handleDownKey}
          autoFocus
          placeholder="Enter TODO title"
          className="input1 w-3/5 rounded-md border-b-2 px-2 py-1 text-xl  focus:border-b-blue-300 focus:outline-none max-[920px]:w-full max-[400px]:mb-2"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button
          title="Add"
          className="addTodo duration-400 rounded-lg bg-neutral-700 px-5 py-2 text-white outline-neutral-700 transition-all hover:bg-sky-400 hover:text-black max-[400px]:flex-1 min-[400px]:ml-4"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
