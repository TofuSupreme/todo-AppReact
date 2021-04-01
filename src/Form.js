import React, { useState } from 'react'

function Form(props) {
  //set up our input value
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.addToDo(value)
    setValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form flex mt-4 mb-4 justify-between"
    >
      <label htmlFor="todo" className="block md:w-2/3 md:mr-1">
        <input
          type="text"
          name="todo"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="text-center block w-full rounded-md border-gray-100 shadow-sm focus:border-red-300 focus:ring focus:ring-red-400 focus:ring-opacity-30"
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
  )
}

export default Form
