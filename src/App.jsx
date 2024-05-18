import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function App() {
  const [todoVal, setTodoVal] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const savetoLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleChange = (e) => {
    setTodoVal(e.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todoVal, iscompleted: false }])
    setTodoVal("")
    savetoLS()
  }

  const handleEdit = (id) => {
    let index = todos.findIndex(item => {
      return item.id === id
    })
    setTodoVal(todos[index].todoVal)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    savetoLS()
  }

  const handleDelete = (id) => {
    let c = confirm("Are you sure?")
    if (c) {
      let newTodos = todos.filter(item => {
        return item.id !== id
      })
      setTodos(newTodos)
      savetoLS()
    }
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].iscompleted = !newTodos[index].iscompleted
    setTodos(newTodos)
    savetoLS()
  }

  const handleShowCompleted = () => {
    setShowFinished(!showFinished)
  }

  const handleDeleteAll = () => {
    localStorage.clear()
    setTodos([])
  }

  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto my-10 bg-gray-300 p-8 rounded-2xl min-h-[80vh] md:w-[40%]">
        <h1 className='text-center font-bold md:text-3xl text-lg'>iTodo - Your Task Manager</h1>
        <div className="takeinput my-5">
          <h2 className='text-xl font-bold my-2'>Add Todo</h2>
          <div className="flex flex-col space-y-2">
            <input className='border-solid rounded-full w-full p-2' type="text" value={todoVal} onChange={handleChange} />
            <button className='bg-black text-white border-solid disabled:bg-slate-700 border-black rounded-md text-sm p-2 py-1' onClick={handleAdd} disabled={todoVal.length < 2}>Add</button>
          </div>
        </div>
        <input type="checkbox" id="show" onChange={handleShowCompleted} checked={showFinished} />
        <label htmlFor="show">Show Finished</label>
        <div className='bg-black h-[1px] my-3 w-[90%] mx-auto opacity-15'></div>
        <div className="show flex justify-between w-full">
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <button className='bg-black text-white border-solid border-black rounded-md text-sm p-2 py-1' onClick={handleDeleteAll}>Delete All</button>
        </div>
        {todos.length === 0 && <div className='my-4'>No Todos!</div>}
        {todos.map(item => {
          return (
            (showFinished || !item.iscompleted) && <div className="display flex my-4 w-full justify-between" key={item.id}>
              <div className="flex space-x-2">
                <input name={item.id} type="checkbox" onChange={handleCheckbox} checked={item.iscompleted} />
                <div className={item.iscompleted ? "text p-0.5 line-through" : "text p-0.5"}>{item.todoVal}</div>
              </div>
              <div className="button flex h-full">
                <button className='bg-black text-white border-solid border-black rounded-md text-sm p-2 py-1 mx-1' onClick={() => { handleEdit(item.id) }}><MdEditSquare /></button>
                <button className='bg-black text-white border-solid border-black rounded-md text-sm p-2 py-1 mx-1' onClick={() => { handleDelete(item.id) }}><MdDelete /></button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
