import React, { useEffect, useRef, useState } from 'react'
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

    const resetHandler = () => {
        console.log("reset handler called");
        setCount(0);
    }

    // using the useRef allow to presist the state, 
    // when the count value is increased everytime, the component is re-rendered, the other local variables 
    // loses data when there is re render. useRef allows us to persist the state. such as below.....
    let a = useRef(0)
    useEffect(() => {
        console.log(`Component redendered again`)
    }, [])
    a.current = a.current + 1
    console.log(`value of ${a.current}`)

    return (
        <>
            <div className="card w-50">
                <div className="card-body">
                    <h3 className="card-title">{count}</h3>
                    <div className="btn btn-primary" onClick={addOneHandler}>Add by one</div>
                    <div className="btn btn-warning" onClick={subtractOneHandler}>Substract by one</div>
                    <div className="btn btn-danger" onClick={resetHandler}>Reset</div>
                </div>
            </div>
        </>
    )
}
