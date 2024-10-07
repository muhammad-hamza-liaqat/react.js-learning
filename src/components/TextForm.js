import React, { useState } from 'react'
import PropTypes from "prop-types"

export default function TextForm(props) {
    const onChangeHandler = (event) => {
        console.log("handle upper case was clicked!")
        setText(event.target.value)
    }

    const upperCase = () => {
        console.log("button clicked", text);
        let newText = text.toUpperCase()
        setText(newText)
    }

    const lowerCase = () =>{
        console.log("button clicked for lower case handler")
        let newText = text.toLowerCase();
        setText(newText)
    }


    const [text, setText] = useState("Capital this text");
    return (

        <>
            <div className="container">
                <div>
                    <div> {props.heading}</div>
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label"></label>
                        <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="3"></textarea>
                    </div>

                    <button className="btn btn-primary " onClick={upperCase}>
                        Convert to upper case
                    </button>

                    <button className="btn btn-primary mx-3" onClick={lowerCase}>
                        Convert to lower case
                    </button>
                </div>
            </div>
            <div className="summary-text">
                <h2>Your text summary</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters.
                </p>
                <p>
                    {0.008 * text.split(" ").length} time to read the minutes
                </p>
            </div>
            <div className="preview">
                <h3>Preview your text:</h3>
                <p>
                    {text}
                </p>
            </div>

        </>

    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
// TextForm.defaultProps = {
//     heading: "no props passed"
// }
