import { React, useState } from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiDeleteBin7Line, RiDeleteBin7Fill } from 'react-icons/ri'
const Todo = ({ todo, changeCompleted, removeTodo }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div className={`todo px-4 relative py-2 text-xl text-white font-mono ${todo.completed ? 'bg-[#17191a]' : 'bg-[#1f2125]'} flex cursor-pointer items-center justify-between shadow-md rounded-md mb-2 transition-colors duration-200`}>
            <div className='flex justify-start items-center w-full ' onClick={() => changeCompleted(todo.id)}>
                {todo.completed ? <RiCheckboxCircleFill className='text-[#33e9a6] mr-3 text-[2rem]' onClick={() => changeCompleted(todo.id)} /> : <RiCheckboxBlankCircleLine className='mr-3 text-[2rem] text-[#5a5b5f]' onClick={() => changeCompleted(todo.id)} />}
                <span className={`${todo.completed ? 'line-through' : ''}`}>
                    {todo.title}
                </span>
            </div>
            <div className='absolute right-8' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <button onClick={() => { removeTodo(todo.id) }} >
                    {hovered
                        ?
                        <RiDeleteBin7Fill className='text-rose-500 z-10' />
                        :
                        <RiDeleteBin7Line className='text-rose-500 z-10' />
                    }
                </button>
            </div>
        </div>
    )
}

export default Todo