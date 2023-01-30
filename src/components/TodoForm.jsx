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
    <div className='text-5xl font-bold flex item justify-center mb-4 text-blue-500 cursor-default'>Todo List</div>
    <div className='addFields flex justify-center px-4 max-[400px]:flex-wrap'>
      <input autoFocus placeholder='Enter TODO title' className='text-xl border-b-2 focus:border-b-blue-300 px-2 w-3/5 max-[920px]:w-full  py-1 rounded-md focus:outline-none max-[400px]:mb-2' type="text" value={value} onChange={handleChange} />
      <button title='Add' className='addTodo min-[400px]:ml-4 rounded-lg max-[400px]:flex-1 text-white px-5 py-2 bg-neutral-700 outline-neutral-700 hover:bg-sky-400 hover:text-black transition-all duration-400' onClick={handleAddTodo}>Add</button>
    </div>
  </div>
  )
}

export default TodoForm