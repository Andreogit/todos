import { React, useState } from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiDeleteBin7Line, RiDeleteBin7Fill } from 'react-icons/ri'
const Todo = ({ todo, changeCompleted, removeTodo }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div className={`todo max-[700px]:mx-4 relative text-xl text-white font-mono ${todo.completed ? 'bg-[#17191a]' : 'bg-[#1f2125]'} flex cursor-pointer items-center justify-between shadow-md rounded-md mb-2 transition-colors duration-200`}>
            <div className='flex justify-start items-center px-4 max-[320px]:px-2 py-2 w-[85%]' onClick={() => changeCompleted(todo.id)}>
                {todo.completed ? <div className='min-w-4'>
                    <RiCheckboxCircleFill className='text-[#33e9a6] z-10 mr-3 text-[2rem]' />
                </div>
                    :
                    <div className='min-w-4'>
                        <RiCheckboxBlankCircleLine className='mr-3 z-10 text-[2rem] text-[#5a5b5f]' />
                    </div>
                }
                <div className={`${todo.completed ? 'line-through' : ''}`}>
                    {todo.title}
                </div>
            </div>
            <div className='absolute right-8 max-sm:right-4 max-[320px]:right-2' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <button title="Delete" onClick={() => { removeTodo(todo.id) }} >
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