import React, { useState } from 'react'
import PropTypes from "prop-types"

export default function TextForm(props) {
    const handleUpperCase = (event) =>{
        console.log("handle upper case was clicked!")
        setText(event.target.value)
    }
    const handleClick = () => {
        console.log("button clicked", text);
        let newText = text.toUpperCase()
        setText(newText)
    }
    const [text, setText] = useState("Capital this text");
    return (
        <div>
            <div> {props.heading}</div>
            <div className="mb-3">
                <label for="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={ handleUpperCase} id="myBox" rows="3"></textarea>
            </div>

            <button className="btn btn-primary" onClick={ handleClick }>
                Convert
            </button>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading: "no props passed"
}
