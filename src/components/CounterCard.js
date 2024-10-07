import React, { useState } from 'react'
import "./css.css";
export default function CounterCard() {
    const [count, setCount] = useState(0);
    const addOneHandler = () => {
        console.log("addOneHandler called")
        setCount(currentState => currentState + 1)

    }

    const subtractOneHandler = () => {
        console.log("substractOneHandler called")
        setCount(currentState => (currentState > 0 ? currentState - 1 : 0))
    }

    return (
        <>
            <div className="card w-50">
                <div className="card-body">
                    <h3 className="card-title">{count}</h3>
                    <div className="btn btn-primary" onClick={addOneHandler}>Add by one</div>
                    <div className="btn btn-warning" onClick={subtractOneHandler}>Substract by one</div>
                </div>
            </div>
        </>
    )
}
