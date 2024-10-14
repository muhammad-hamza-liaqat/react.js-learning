import React from 'react'
import { useReducer } from 'react'
import { formReducer, initialState } from '../reducers/formReducer'

export default function Form() {
    const [state, dispatch] = useReducer(formReducer, initialState)
    const handleChange = (e) => {
        dispatch({
            type: "ADD",
            payload: { field: e.target.name, value: e.target.value },
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully:", state);
        dispatch({ type: "RESET" });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    name="message"
                    value={state.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </form>
    );
};

