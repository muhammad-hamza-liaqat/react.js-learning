import React, { useContext } from 'react'
import './css.css'
import { counterContext } from '../context/context'

export default function Counter() {
    const counterState = useContext(counterContext)
    const addOneHandler = () => {
        counterState.setCount(() => counterState.count + 1)
    }
    const subOneHandler = () => {
        if (counterState.count === 0) return 
        counterState.setCount(() => counterState.count - 1)

    }
    return (
        <>
            <div className='btn'>
                <button className='addBtn' onClick={addOneHandler}>
                    + 1
                </button>
                <button className='subBtn' onClick={subOneHandler}>
                    - 1
                </button>
            </div>
        </>
    )
}
