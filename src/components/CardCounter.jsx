import React, { useState } from 'react'
export default function CardCounter() {
    const [counter, setCounter] = useState(0)
    const [mode, setMode] = useState("development")
    const addOne = () => {
        setCounter(previousCount => previousCount + 1)
    }
    const subOne = () => {
        if (counter === 0) return
        setCounter(previousCount => previousCount - 1)
    }
    const changeMode = () => {
        if (mode === "development"){
            setMode("Production")
        }
        else {
            setMode("development")
        }
    }

    return (
        <>
            <div className='card w-50'>
                <div className='card-body'>
                    <h5 className='card-title'>{counter}</h5>
                    <h5 className='card-title'>mode:{mode}</h5>
                    <div className='btn btn-primary mx-3' onClick={addOne}>Add 1</div>
                    <div className='btn btn-primary mx-3' onClick={subOne}>Substract 1</div>
                    <div className='btn btn-danger' onClick={changeMode}>Mode</div>
                </div>
            </div>
        </>
    )
}
