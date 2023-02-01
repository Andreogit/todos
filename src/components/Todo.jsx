import { React, useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiDeleteBin7Line,
  RiDeleteBin7Fill,
} from "react-icons/ri";
const Todo = ({ todo, changeCompleted, removeTodo }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`todo font-mono relative text-xl text-white max-[700px]:mx-4 ${todo.completed ? "bg-[#17191a]" : "bg-[#1f2125]"
        } mb-2 flex cursor-pointer items-center justify-between rounded-md shadow-md transition-colors duration-200`}
    >
      <div
        className="flex w-[85%] items-center justify-start px-4 py-2 max-[320px]:px-2"
        onClick={() => changeCompleted(todo.id)}
      >
        {todo.completed ? (
          <div className="min-w-4">
            <RiCheckboxCircleFill className="z-10 mr-3 text-[2rem] text-[#2cfb82]" />
          </div>
        ) : (
          <div className="min-w-4">
            <RiCheckboxBlankCircleLine className="z-10 mr-3 text-[2rem] text-[#5a5b5f]" />
          </div>
        )}
        <div className={`${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </div>
      </div>
      <div
        className="absolute right-8 max-sm:right-4 max-[320px]:right-2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          title="Delete"
          onClick={() => {
            removeTodo(todo.id);
          }}
        >
          {hovered ? (
            <RiDeleteBin7Fill className="z-10 text-rose-500" />
          ) : (
            <RiDeleteBin7Line className="z-10 text-rose-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Todo;
