import React, { useState } from 'react';
import Toaster from './Toaster';

export default function AddItem() {
  const [text, setText] = useState('');
  const [showToast, setShowToast] = useState(false);
  

  const addTextHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const existingItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    existingItems.push(text);
    localStorage.setItem('todoItems', JSON.stringify(existingItems));

    setShowToast(true); 
    setTimeout(() => setShowToast(false), 2000); 

    setText(''); 
  };

  return (
    <>
      <form className="row g-3 my-3" onSubmit={addTextHandler}>
        <div className="col-auto">
          <label htmlFor="textBox" className="visually-hidden">
            Text
          </label>
          <input
            type="text"
            className="form-control"
            id="textBox"
            placeholder="Google meet at 3PM"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Add into ToDo
          </button>
        </div>
      </form>

      <Toaster message="Item added to your ToDo list!" show={showToast} />
    </>
  );
}
