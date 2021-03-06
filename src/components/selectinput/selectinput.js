import React from 'react'

import PropTypes from 'prop-types';


const SelectInput = (props) => {
    let wrapperClass = 'form-group'

    return (
        <div className={wrapperClass}>
          <b><label htmlFor={props.htmlname}>{props.label}</label></b>
          <div className="field">
                <select name={props.name} 
                onChange={props.clicked}
                value={props.authorId}
                className="form-control"> 
                <option value="">{props.defaultOptions}</option>
                {props.options.map((el, index) => {
                    return <option key={index} value={el.authorId}>{el.text}</option>
                })} 
                </select>
            </div>
        </div>
    )
}

SelectInput.propTypes = {
    htmlname:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string,
    name:PropTypes.string,
    clicked:PropTypes.func,
    options:PropTypes.array.isRequired
}

export default SelectInput;