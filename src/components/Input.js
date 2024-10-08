import React, { useState } from 'react'

export default function Input() {
    const [text, setText] = useState("");

    return (
        <>
            <div className="row g-3 align-items-center my-4 mx-4">
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Enter Task:</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary mx-2"> Add todo </button>
                </div>

            </div>
        </>
    )
}
