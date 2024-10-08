import React, { useState, useEffect } from 'react'

export default function Input () {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  const addOrEditTodo = () => {
    if (text.trim()) {
      if (isEditing) {
        const updatedTodos = todos.map((todo, index) =>
          index === currentTodoIndex ? text : todo
        )
        setTodos(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
        setIsEditing(false)
        setCurrentTodoIndex(null)
      } else {
        const newTodos = [...todos, text]
        setTodos(newTodos)
        localStorage.setItem('todos', JSON.stringify(newTodos))
      }
      setText('')
    }
  }

  const deleteTodo = index => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const editTodo = index => {
    setText(todos[index])
    setIsEditing(true)
    setCurrentTodoIndex(index)
  }

  return (
    <>
      <div className='row g-3 align-items-center my-4 mx-4'>
        <div className='col-auto'>
          <label htmlFor='inputTask' className='col-form-label'>
            {isEditing ? 'Edit Task:' : 'Enter Task:'}
          </label>
        </div>
        <div className='col-auto'>
          <input
            type='text'
            id='inputTask'
            className='form-control'
            value={text}
            onChange={e => setText(e.target.value)}
            aria-describedby='taskHelpInline'
          />
        </div>
        <div className='col-auto'>
          <button className='btn btn-primary mx-2' onClick={addOrEditTodo}>
            {isEditing ? 'Save' : 'Add todo'}
          </button>
        </div>
      </div>

      <div className='mx-4'>
        <h3>Todo List</h3>
        <ul className='list-group'>
          {todos.map((todo, index) => (
            <li
              key={index}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              {todo}
              <div>
                <button
                  className='btn btn-warning btn-sm mx-1'
                  onClick={() => editTodo(index)}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
