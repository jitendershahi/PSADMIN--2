import React from 'react'

import PropTypes from 'prop-types';


const TextInput = (props) => {
    let wrapperClass = 'form-group'

    if(props.error && props.error.length > 0){ 
        wrapperClass += " " + 'has-error'
    }
    return (
        <div className={wrapperClass}>
          <label htmlFor={props.htmlname}>{props.label}</label>
          <div className="field">
            <input type="text" 
                value={props.value}
                placeholder={props.placeholder} 
                name={props.name}
                onChange={props.clicked}
                className="form-control"/>
            </div>
           {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    )
}

TextInput.propTypes = {
    error:PropTypes.string.isRequired,
    htmlname:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string,
    placeholder:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    clicked:PropTypes.func.isRequired
}

export default TextInput;