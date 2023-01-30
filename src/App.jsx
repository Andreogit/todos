import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { RiDeleteBin7Fill } from 'react-icons/ri'
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let todoItems = window.localStorage.getItem('todos')
    setTodos(JSON.parse(todoItems))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const [firstLoad, setFirstLoad] = useState(true)
  const changeCompleted = (id) => {
    let copy = [...todos]
    let curr = copy.find(t => t.id === id)
    curr.completed = !curr.completed
    setTodos(copy)
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(t => t.id !== id))
  }

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  return <div className="App py-4 lg:px-10 font-Montserrat sm:px-2 md:px-4">
    <TodoForm setFirstLoad={setFirstLoad} addTodo={addTodo} />
    <TodoList firstLoad={firstLoad} todos={todos} changeCompleted={changeCompleted} removeTodo={removeTodo} />
    {todos.length &&
      <button onClick={() => setTodos([])} title="delete all" className="fixed flex items-center px-3 py-1 left-3 bottom-3 rounded-md bg-[#0f1014] text-red-500 text-md">
        Delete all
        <RiDeleteBin7Fill className="ml-2" />
      </button>
    }
    <a href="https://t.me/andr3o" target='_blank' rel="noreferrer" className="bug text-[#0f1014] absolute hover:text-black right-3 bottom-3 hover:bg-violet-400 rounded-xl px-2 transition-all select-none duration-200 max-[800px]:hidden">Found bug? contact me!</a>
  </div>;
}

export default App;
