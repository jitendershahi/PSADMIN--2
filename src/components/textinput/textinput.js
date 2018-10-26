import React from 'react'

import PropTypes from 'prop-types';


const TextInput = (props) => {
    let wrapperClass = 'form-group'

    return (
        <div className={wrapperClass}> 
          <b><label htmlFor={props.htmlname}>{props.label}</label></b>
          <div>
            <input type="text" 
                value={props.value}
                placeholder={props.placeholder} 
                name={props.name}
                onChange={props.clicked}
                className="form-control"/>
            </div>
            <div className="text-danger">{props.errorname}</div>
        </div>
    )
}

TextInput.propTypes = {
    htmlname:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string,
    placeholder:PropTypes.string,
    name:PropTypes.string,
    clicked:PropTypes.func
}

export default TextInput;