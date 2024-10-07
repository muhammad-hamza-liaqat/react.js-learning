import React, { useState, useEffect } from 'react'
import Toaster from './Toaster'

export default function AddItem () {
  const [text, setText] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [todoItems, setTodoItems] = useState([]) 

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('todoItems')) || []
    setTodoItems(items)
  }, [])

  const addTextHandler = e => {
    e.preventDefault()
    if (!text.trim()) return

    const existingItems = [...todoItems, text]

    localStorage.setItem('todoItems', JSON.stringify(existingItems))

    setTodoItems(existingItems)

    setToastMessage(`${text} Added Successfully in Local storage`)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)

    setText('')
  }

  return (
    <div className='container mt-4'>
      <form className='row g-3 my-3' onSubmit={addTextHandler}>
        <div className='col-auto'>
          <label htmlFor='textBox' className='visually-hidden'>
            Text
          </label>
          <input
            type='text'
            className='form-control'
            id='textBox'
            placeholder='Add a new task'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-primary'>
            Add into ToDo
          </button>
        </div>
      </form>

      <Toaster message={toastMessage} show={showToast} />

      <div className='my-3'>
        <h5>Todo List:</h5>
        <ul className='list-group'>
          {todoItems.map((item, index) => (
            <li key={index} className='list-group-item list-group-item-action'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
