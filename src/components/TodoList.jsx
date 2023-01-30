import { React, useState } from 'react'
import Todo from './Todo'
import { BiTask } from 'react-icons/bi'
const TodoList = ({ todos, changeCompleted, removeTodo, firstLoad }) => {
    return (<>
        {todos.length ? todos.map(todo => {
            return <Todo todo={todo} changeCompleted={changeCompleted} removeTodo={removeTodo} />
        })
            :
            <div className={`${firstLoad ? 'hidden' : ''} flex justify-center items-center`}>
                <BiTask className='text-green-400 text-5xl mr-5' />
                <span className='flex justify-center text-white text-4xl py-5'>Nothing to do now</span>
            </div>
        }
        {firstLoad && <div className='flex justify-center items-center mx-auto max-w-[50%]'>
            <span className='text-5xl mr-5'>
                👋
            </span>
            <span className='flex justify-center text-white text-4xl py-5'>Hi, you can add new tasks by filling out the form</span>
        </div>}
    </ >
    )
}

export default TodoList