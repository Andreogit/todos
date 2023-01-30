import { React, useState } from 'react'
import { v4 } from 'uuid'
const TodoForm = ({ addTodo, setFirstLoad }) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleAddTodo = () => {
    let todo = {
      id: v4(),
      title: value,
      completed: false,
    }
    setFirstLoad(false)
    addTodo(todo)
    setValue('')
  }
  return (<div className='mb-4'>
    <div className='text-5xl font-bold flex item justify-center mb-4 text-blue-500'>Todo List</div>
    <div className='addFields flex justify-center'>
      <input autoFocus className='text-xl border-b-2 focus:border-b-blue-300 px-2 w-2/5 py-1 rounded-md focus:outline-none' type="text" value={value} onChange={handleChange} />
      <button className='addTodo mx-4 rounded-lg text-white px-5 bg-neutral-700 outline-neutral-700 hover:bg-neutral-300 hover:text-black transition-all duration-400' onClick={handleAddTodo}>Add</button>
    </div>
  </div>
  )
}

export default TodoForm