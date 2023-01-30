import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
function App() {
  const [firstLoad, setFirstLoad] = useState(true)
  const changeCompleted = (id) => {
    let copy = [...todos]
    let curr = copy.find(t => t.id === id)
    curr.completed = !curr.completed
    setTodos(copy)
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(t => t.id !== id))
    console.log('Deleted');
  }

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const [todos, setTodos] = useState([]);
  return <div className="App py-4 px-10 font-Montserrat">
    <TodoForm setFirstLoad={setFirstLoad} addTodo={addTodo} />
    <TodoList firstLoad={firstLoad} todos={todos} changeCompleted={changeCompleted} removeTodo={removeTodo} />
  </div>;
}

export default App;
