import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { RiDeleteBin7Fill, RiCheckboxCircleFill, } from "react-icons/ri";
import { MdSort, MdChecklist } from "react-icons/md";
import { BiSortAZ, BiSortZA } from 'react-icons/bi'
import { BsXCircleFill } from 'react-icons/bs'
function App() {
  const [filtered, setFiltered] = useState(false)
  const [todos, setTodos] = useState([]);
  const [todosSorted, setTodosSorted] = useState([])
  const [firstLoad, setFirstLoad] = useState(true);
  const [selectedTitleSort, setSelectedTitleSort] = useState("");
  const [selectedCompletionSort, setSelectedCompletionSort] = useState("")

  useEffect(() => {
    let todoItems = window.localStorage.getItem("todos");
    setTodos(JSON.parse(todoItems));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const changeCompleted = (id) => {
    let copy = [...todos];
    let curr = copy.find((t) => t.id === id);
    curr.completed = !curr.completed;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  useEffect(() => {
    console.log('rendered1');
    if (selectedTitleSort === 'AZ') {
      if (selectedCompletionSort === 'OnlyCompleted' || selectedCompletionSort === 'OnlyUnCompleted') {
        let sorted = [...todosSorted].sort((a, b) => a.title.localeCompare(b.title))
        setTodosSorted(sorted)
      } else {
        let sorted = [...todos].sort((a, b) => a.title.localeCompare(b.title))
        setTodosSorted(sorted)
      }
    } else if (selectedTitleSort === 'ZA') {
      if (selectedCompletionSort === 'OnlyCompleted' || selectedCompletionSort === 'OnlyUnCompleted') {
        let sorted = [...todosSorted].sort((a, b) => b.title.localeCompare(a.title))
        setTodosSorted(sorted)
      }
      else {
        let sorted = [...todos].sort((a, b) => b.title.localeCompare(a.title))
        setTodosSorted(sorted)
      }
    } else {
      if (selectedCompletionSort !== '') {
      } else if (selectedCompletionSort === 'OnlyCompleted') {
        setTodosSorted([...todos])
        let filtered = todosSorted.filter(a => a.completed)
        setTodosSorted(...filtered)
      } else if (selectedCompletionSort === 'OnlyUnCompleted') {
        setTodosSorted([...todos])
        let filtered = todos.filter(a => a.completed === false)
        setTodosSorted(filtered)
      } else setTodosSorted([...todos])
    }
  }, [selectedTitleSort, todos])

  useEffect(() => {
    console.log('rendered2');
    if (selectedCompletionSort === 'OnlyCompleted') {
      if (selectedTitleSort === 'AZ') {
        let filtered = todosSorted.filter(a => a.completed)
        setTodosSorted(filtered.sort((a, b) => a.title.localeCompare(b.title)))
      }
      else if (selectedTitleSort === 'ZA') {
        let filtered = todosSorted.filter(a => a.completed)
        setTodosSorted(filtered.sort((a, b) => b.title.localeCompare(a.title)))
      }
      else {
        let filtered = todosSorted.filter(a => a.completed)
        setTodosSorted(filtered)
      }
    }
    else if (selectedCompletionSort === 'OnlyUnCompleted') {
      let filtered = todos.filter(a => a.completed === false)
      setTodosSorted(filtered)
    } else setTodosSorted([...todos])
  }, [selectedCompletionSort, todos])

  const sortByTitleIcon = (param) => {
    switch (param) {
      case "AZ":
        return (
          <button
            className="sortByTitle mx-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#17191a] text-2xl text-red-400"
            onClick={() => {
              setSelectedTitleSort("ZA")
              setFiltered(true)
            }}
          >
            <BiSortAZ title="Sorted by title in ascending order" />
          </button>
        );
      case "ZA":
        return (
          <button
            className="sortByTitle mx-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#17191a] text-2xl text-[#3ef338]"
            onClick={() => {
              setSelectedTitleSort("")
              setFiltered(false)
            }}
          >
            <BiSortZA title="Sorted by title in decreasing order" />
          </button>
        );

      default:
        return (
          <button
            className="sortByTitle mx-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#17191a] text-2xl text-cyan-300"
            onClick={() => {
              setSelectedTitleSort("AZ")
              setFiltered(true)
            }}
          >
            <MdSort title="Sort by title" />
          </button>
        );
    }
  }

  const sortByCompletionIcon = (param) => {
    switch (param) {
      case 'OnlyCompleted':
        return (
          <button
            className="OnlyCompleted mx-1 flex h-8 w-8 items-center justify-beetween rounded-lg bg-[#17191a] text-2xl"
            onClick={() => {
              setSelectedCompletionSort("OnlyUnCompleted")
              setFiltered(true)
            }}
          >
            <RiCheckboxCircleFill className="text-[#2cfb82] mx-auto" title="Shown completed" />
          </button>
        );
      case 'OnlyUnCompleted':
        return (
          <button
            className="OnlyUnCompleted mx-1 flex h-8 w-8 items-center justify-beetween rounded-lg bg-[#17191a] text-2xl"
            onClick={() => {
              setSelectedCompletionSort("")
              setFiltered(false)
            }}
          >
            <BsXCircleFill className="text-red-500 mx-auto text-xl" title="Shown uncompleted" />
          </button>
        );
      default:
        return (
          <button
            className="sortIcon mx-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#17191a] text-2xl text-cyan-300"
            onClick={() => {
              setSelectedCompletionSort("OnlyCompleted")
              setFiltered(true)
            }}
          >
            <MdChecklist title="Sort by completion" />
          </button>
        );
    }
  }
  return (
    <div className="App py-4 font-Montserrat sm:px-2 md:px-4 lg:px-10">
      <TodoForm setFirstLoad={setFirstLoad} addTodo={addTodo} />
      {!!todos.length && (
        <div className="sort mb-3 flex items-center mx-4 text-white">
          Sort by:
          {sortByTitleIcon(selectedTitleSort)}
          {sortByCompletionIcon(selectedCompletionSort)}
        </div>
      )}
      {filtered ?
        <TodoList
          filtered={true}
          firstLoad={firstLoad}
          todos={todosSorted}
          changeCompleted={changeCompleted}
          removeTodo={removeTodo}
        />
        :
        <TodoList
          filtered={false}
          firstLoad={firstLoad}
          todos={todosSorted}
          changeCompleted={changeCompleted}
          removeTodo={removeTodo}
        />
      }

      {!!todos.length && (
        <button
          onClick={() => setTodos([])}
          title="delete all"
          className="text-md fixed left-3 bottom-3 flex items-center rounded-md bg-[#0f1014] px-3 py-1 text-red-500"
        >
          Delete all
          <RiDeleteBin7Fill className="ml-2" />
        </button>
      )}
      <a
        href="https://t.me/andr3o"
        target="_blank"
        rel="noreferrer"
        className="bug absolute right-3 bottom-3 select-none rounded-xl px-2 text-[#0f1014] transition-all duration-200 hover:bg-violet-400 hover:text-black max-[800px]:hidden"
      >
        Found bug? contact me!
      </a>
    </div>
  );
}

export default App;
