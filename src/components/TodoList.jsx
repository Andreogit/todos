import { React } from 'react'
import Todo from './Todo'
import { BiTask } from 'react-icons/bi'
const TodoList = ({ todos, changeCompleted, removeTodo, firstLoad }) => {
    return (<>
        {todos.length ? todos.map(todo => {
            return <Todo todo={todo} key={todo.id} changeCompleted={changeCompleted} removeTodo={removeTodo} />
        })
            :
            <div className={`${firstLoad ? 'hidden' : ''} flex justify-center flex-wrap items-center px-4`}>
                <BiTask className='text-green-400 text-5xl mr-5' />
                <span className='flex justify-center text-white text-4xl py-5 text-center'>Nothing to do now
                </span>
            </div>
        }
        {firstLoad && <div className='flex justify-center items-center mx-auto min-w-[300px] w-1/2 max-[900px]:w-3/4 max-[650px]:w-full max-[650px]:px-4 max-[400px]:flex-wrap'>
            {todos.length < 1 && <><span className='text-5xl mr-5'>
                👋
            </span>
                <span className='flex justify-center text-white text-4xl py-5 text-center'>
                    Hi, you can add new tasks by filling out the form</span></>}
        </div>}
    </ >
    )
}

export default TodoList