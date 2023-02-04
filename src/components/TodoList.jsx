import { React } from "react";
import Todo from "./Todo";
import { BiTask } from "react-icons/bi";

const TodoList = ({ todos, filtered, changeCompleted, removeTodo, firstLoad }) => {
    return (
        <>
            {todos.length ? (
                todos.map((todo) => {
                    return (
                        <Todo className='item'
                            todo={todo}
                            key={todo.id}
                            changeCompleted={changeCompleted}
                            removeTodo={removeTodo}
                        />
                    );
                })
            ) :
                filtered ? (<div className="todo text-white text-4xl text-center py-4">Zero matches 🥺</div>)
                    :
                    <div
                        className={`${firstLoad ? "hidden" : ""
                            } todo flex flex-wrap items-center justify-center px-4`}
                    >
                        <BiTask className="mr-5 text-5xl text-green-400" />
                        <span className="flex justify-center py-5 text-center text-4xl text-white">
                            Nothing to do now
                        </span>
                    </div>
            }
            {
                (!!firstLoad && !filtered) ? (
                    <div className="mx-auto flex w-1/2 min-w-[300px] items-center justify-center max-[900px]:w-3/4 max-[650px]:w-full max-[650px]:px-4 max-[400px]:flex-wrap">
                        {todos.length < 1 && (
                            <>
                                <span className="mr-5 text-5xl">👋</span>
                                <span className="flex justify-center py-5 text-center text-4xl text-white">
                                    Hi, you can add new tasks by filling out the form
                                </span>
                            </>
                        )}
                    </div>
                )
                    :
                    ''
            }
        </>
    );
};

export default TodoList;
