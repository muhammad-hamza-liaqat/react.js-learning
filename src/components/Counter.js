import React, { useReducer } from 'react'
import { counterReducer, initialState } from '../reducers/counterReducer'

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  return (
    <>
      <div className="counter">
        <h2> counter: {state.count}</h2>
        <div className="btn btn-primary mx-2" onClick={() => dispatch({ type: "INC" })}> +1</div>
        <div className="btn btn-primary mx-2" onClick={() => dispatch({ type: "DEC" })}>-1</div>
        <div className="btn btn-primary" onClick={() => dispatch({ type: "RESET" })}>Reset</div>
      </div>
    </>
  )
}
