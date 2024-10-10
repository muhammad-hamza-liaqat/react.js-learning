import React, { useReducer } from 'react'

export default function ReducerCounter() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "INC":
                return { ...state, counter: state.counter + 1 }
            case "DEC":
                if (state.counter === 0) {
                    return state
                }
                else {
                    return { ...state, counter: state.counter - 1 }
                }
            case "MODE":
                // console.log("inside mode click")
                return { ...state, mode: state.mode === "Development" ? "Production" : "Development" }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
        mode: 'Development'
    })
    return (
        <>
            <div className='card w-50'>
                <div className='card-body'>
                    <h5 className='card-title'>{state.counter}</h5>
                    <h5 className='card-title'>mode: {state.mode}</h5>
                    <div className='btn btn-primary mx-3' onClick={() => {
                        dispatch({ type: "INC" })
                    }}>Add 1</div>
                    <div className='btn btn-primary mx-3' onClick={() => {
                        dispatch({ type: "DEC" })
                    }}>Substract 1</div>
                    <div className='btn btn-danger' onClick={() => { dispatch({ type: "MODE" }) }}>Mode</div>
                </div>
            </div>
        </>
    )
}
