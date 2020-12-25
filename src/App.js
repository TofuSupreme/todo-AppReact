import React, { useState } from 'react'
import './App.css'

function App() {
  //Set up the Todo List
  const [toDoList, setToDoList] = useState([
    { text: 'study coding' },
    { text: 'exercise' },
    { text: 'stress less' }
  ])

  //set up our input value
  const [value, setValue] = useState('')

  //Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    addToDo(value)
    setValue('')
  }

  //Add To-Do
  const addToDo = text => {
    const updatedToDoList = [...toDoList, { text }]
    setToDoList(updatedToDoList)
  }

  //Delete To-Do
  const handleDelete = todo => {
    let filteredToDoList = toDoList.filter(currentToDo => currentToDo !== todo)
    setToDoList(filteredToDoList)
  }

  return (
    <div className="min-h-screen flex flex-col flex-shrink-0 bg-gray-100">
      <header className="h-16 bg-pink-900 flex items-center justify-center mb-8 shadow-lg">
        <h1 className="text-3xl"> Today, I will ... </h1>
      </header>

      <main className="flex-grow max-w-md mx-auto bg-gray-300 p-8 rounded">
        <form
          onSubmit={handleSubmit}
          className="form flex mt-4 mb-4 justify-between"
        >
          {/* <TextField
            id="outlined-basic"
            label="To Do"
            variant="outlined"
            value={value}
            onChange={e => setValue(e.target.value)}
          /> */}
          {/* <Fab size="small" color="primary" aira-label="add" type="submit">
            <AddIcon />
          </Fab> */}

          <label htmlFor="todo" className="block md:w-2/3 md:mr-1">
            <input
              type="text"
              name="todo"
              value={value}
              onChange={e => setValue(e.target.value)}
              className="block w-full rounded-md border-gray-100 shadow-sx focus:border-red-300 focus:ring focus:ring-red-400 focus:ring-opacity-30"
              placeholder="Add a new Todo!"
              autoFocus
            />
          </label>

          <button
            type="submit"
            className="md:w-1/3 md:ml-1 px-6 text-xs font-medium text-center text-white uppercase transition bg-green-500 rounded hover:shadow-lg hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        </form>

        <div className="toDoList h-full">
          {toDoList.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded flex-nowrap h-full mt-2 mb-2 bg-gray-100 hover:shadow hover:border-red-300 transform hover:scale-x-105"
            >
              <p className="w-5/6 px-6 py-2">{todo.text}</p>

              {/* <IconButton
                  color="secondary"
                  size="small"
                  onClick={() => handleDelete(todo)}
                >
                  <DeleteIcon />
                </IconButton> */}

              <div
                onClick={() => handleDelete(todo)}
                className="flex-1 h-full w-1/6 py-3 cursor-pointer bg-pink-900 hover:bg-red-400 rounded-r"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-full w-5 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex-shrink-0 h-16 mt-8 bg-pink-900 flex items-center justify-center shadow-footer">
        <p>
          S'Moores &copy; {new Date().getFullYear()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            className="h-full w-7 mx-auto cursor-pointer hover:text-pink-300"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </p>
      </footer>
    </div>
  )
}

export default App
